import { useQuery } from "@apollo/client";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import { Theme } from "../../styles";

import { GET_WATCH_LIST } from "../../operations";

import { MediaList, Processing } from "../../components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const WatchListPage = () => {
  const { loading, error, data } = useQuery(GET_WATCH_LIST);

  if (error) return <div>{error.message}</div>;

  return (
    <Container>
      <Helmet>
        <title>Watch List - Bell Media</title>
      </Helmet>
      {loading ? (
        <Processing on color={`${Theme.colors.white}`} size={20} />
      ) : data.watchList.length === 0 ? (
        <div>Watch List is empty</div>
      ) : (
        <MediaList mediaList={data.watchList} />
      )}
    </Container>
  );
};
