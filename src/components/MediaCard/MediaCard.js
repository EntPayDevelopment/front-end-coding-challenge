import { Fragment, useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import styled from "styled-components";
import PropTypes from "prop-types";
import { motion, useAnimation } from "framer-motion/dist/framer-motion";
import { useInView } from "react-intersection-observer";

import { ADD_TO_WATCH_LIST, REMOVE_FROM_WATCH_LIST } from "../../operations";

import { Button } from "../../components";

export const MediaCard = (props) => {
  const { media } = props;
  const { title, image, isAddedToWatchList } = media;

  const [addMediaToWatchList, addResult] = useMutation(ADD_TO_WATCH_LIST);
  const [removeMediaFromWatchList, removeResult] = useMutation(
    REMOVE_FROM_WATCH_LIST,
  );

  // **********************************************************************
  // OnClick Handler
  // **********************************************************************
  const handleClickAdd = () => {
    addMediaToWatchList({
      variables: {
        media,
      },
    });
  };
  const handleClickRemove = () => {
    removeMediaFromWatchList({
      variables: {
        media,
      },
    });
  };

  // **********************************************************************
  // Animation
  // **********************************************************************
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // **********************************************************************
  // Handle processing state (adding, removing)
  // **********************************************************************
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    setIsProcessing(addResult.loading || removeResult.loading);
  }, [addResult, removeResult]);

  return (
    <Container
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={CardVariants}
    >
      <ImageWrapper>
        <Image
          src={image}
          alt="Media Image"
          className="image"
          aria-label={`${title} Image`}
        />
      </ImageWrapper>
      <Title aria-label={title}>{title}</Title>
      <Fragment>
        {!isAddedToWatchList ? (
          <Button
            text="Add to Watchlist"
            onClick={handleClickAdd}
            isProcessing={isProcessing}
          />
        ) : (
          <Button
            text="Remove from Watchlist"
            onClick={handleClickRemove}
            isProcessing={isProcessing}
          />
        )}
      </Fragment>
    </Container>
  );
};

MediaCard.propTypes = {
  media: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    isAddedToWatchList: PropTypes.bool.isRequired,
  }).isRequired,
};

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  height: 100%;

  :hover .image {
    transform: scale(1.2);
  }
`;

const CardVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: 100 },
};

const ImageWrapper = styled.div`
  overflow: hidden;
`;

const Image = styled.img`
  background-color: ${(props) => props.theme.colors.background};
  background-image: ${(props) => props.src};
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  transition: all 0.5s;
  overflow: hidden;
`;

const Title = styled.div`
  width: 100%;
  font-size: 1.2rem;
  line-height: 2rem;
`;
