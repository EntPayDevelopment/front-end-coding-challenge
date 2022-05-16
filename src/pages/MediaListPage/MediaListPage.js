import { useQuery } from "@apollo/client";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import { Theme } from "../../styles";

import { GET_MEDIA_LIST } from "../../operations";

import { MediaList, Processing } from "../../components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const MediaListPage = () => {
  const { loading, error, data } = useQuery(GET_MEDIA_LIST);

  if (error) return <div>{error.message}</div>;

  return (
    <Container>
      {/* Handle page head */}
      <Helmet>
        <title>Media List - Bell Media</title>
      </Helmet>
      {loading ? (
        <Processing on color={`${Theme.colors.white}`} size={20} />
      ) : data.mediaList.length === 0 ? (
        <div>Media List is empty</div>
      ) : (
        <MediaList mediaList={data.mediaList} />
      )}
    </Container>
  );
};
