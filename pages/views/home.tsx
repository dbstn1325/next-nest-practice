import * as React from 'react';
import { NextPage, NextPageContext } from 'next';

interface Props {
  query: { name?: string };
}

const Home: NextPage<Props> = ({ query }) => {
  const userName = query.name ? query.name : null;
  return (
    <div>
      {userName}
    </div>
  );
};

export async function getServerSideProps(ctx: NextPageContext) {
  //ctx안에는 query의 { name: 'yoon' }, 이 들어있는 상태
  
  const query = {     //이곳에서 query라는 이름으로 예쁘게만들어서 props로 보내줘야하므로 const 선언
    name: ctx.query.name || null,
  };

  //실제 쓰일 곳으로 보내줌
  return { props: { query } };
}

export default Home;
