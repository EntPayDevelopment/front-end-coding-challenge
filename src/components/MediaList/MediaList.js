import styled from "styled-components";
import PropTypes from "prop-types";

import { MediaCard } from "../MediaCard";

// Listing MediaCard
export const MediaList = ({ mediaList }) => (
  <MediaListContainer>
    {mediaList.map((item) => (
      <MediaCard key={item.id} media={item} />
    ))}
  </MediaListContainer>
);

MediaList.propTypes = {
  mediaList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      isAddedToWatchList: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

const MediaListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-template-rows: minmax(200px auto);
  grid-gap: 2rem;

  @media ${(props) => props.theme.device.tablet} {
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  }
`;
