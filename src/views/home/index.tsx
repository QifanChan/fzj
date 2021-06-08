import React, { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import debounce from 'lodash/debounce';

import Avatar from '@comps/Avatar';
import Loading from '@comps/Loading';
import Error from '@comps/Error';
import Label from '@comps/Label';
import { scrollLoad } from '@utils/tools';
import { useFzjList } from '@/models/fzj';
import { emojiMap, categoriesUrl, discussionsNo } from '@utils/constant';

import './index.scss';

export default function HomeView() {
  const history = useHistory();
  const [a, b] = useFzjList();
  const [listData, setListData] = a;
  const [getData, { loading, error, data }] = b;

  const _scrollLoad = useCallback(
    debounce(
      () => {
        scrollLoad(() => {
          listData.pageInfo.hasNextPage &&
            getData({ variables: { cursor: listData.pageInfo.cursor } });
        });
      },
      500,
      { leading: true }
    ),
    [listData.pageInfo]
  );

  useEffect(() => {
    window.addEventListener('scroll', _scrollLoad, false);
    return () => {
      window.removeEventListener('scroll', _scrollLoad, false);
    };
  }, [listData.pageInfo]);

  useEffect(() => {
    !listData.list.length && getData();
  }, []);

  useEffect(() => {
    if (data) {
      const { endCursor, hasNextPage } = data.repository.discussions.pageInfo;
      setListData({
        pageInfo: { cursor: endCursor, hasNextPage },
        list: [...listData.list, ...(data.repository.discussions.edges || [])],
      });
    }
  }, [data]);

  const handleGo = (url: string) => {
    window.open(url);
  };

  const handleIssues = (num: number) => {
    history.push(`/issues/${num}`);
  };

  if (error) return <Error />;

  const _list = listData.list;

  return (
    <div className="home-view view">
      <div className="fzj-list-box">
        <div className="fzj-list">
          {_list.map(({ node, cursor }: any) => {
            const { category, author, number: issues, labels } = node;

            return (
              <div
                key={cursor}
                className="fzj-item"
                onClick={() => handleIssues(issues)}
              >
                <div className="title">
                  <em
                    className="issues"
                    onClick={() => handleGo(discussionsNo(issues))}
                  >
                    #{issues}
                  </em>
                  <span>{node.title}</span>
                </div>
                <div className="info">
                  <span
                    className="category"
                    onClick={() => handleGo(categoriesUrl(category.name))}
                  >
                    {emojiMap[category.emoji]} {category.name}
                  </span>
                  <Avatar
                    avatar={author.avatarUrl}
                    name={author.login}
                    onClick={() => handleGo(author.url)}
                  />
                  <div className="labels">
                    {labels.edges.map(({ node: labelNode }: any) => {
                      return (
                        <Label
                          key={labelNode.id}
                          name={labelNode.name}
                          color={labelNode.color}
                        />
                      );
                    })}
                  </div>
                </div>
                {/* <div dangerouslySetInnerHTML={{ __html: node.bodyHTML }} /> */}
              </div>
            );
          })}
          {loading && _list.length > 0 && (
            <p className="data-loading">Loading...</p>
          )}
        </div>
      </div>
      <Loading visible={loading && _list.length === 0} />
    </div>
  );
}