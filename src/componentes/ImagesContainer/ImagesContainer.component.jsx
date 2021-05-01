import { Box } from "@material-ui/core";
import React from "react";
import "./imageList.css";

const { useEffect } = React;

const ImageContainer = (props) => {
  const { images } = props;

  return (
    <Box
      className="images-container"
      width="100%"
      height="100%"
    >
      <section>
        {images.map((image, index) => (
          <div
            className="image-div"
            style={{
              width: `${(image.width * 150) / image.height}px`,
              flexGrow: (image.width * 150) / image.height
            }}
          >
            <img src={image.fullUrl} />
          </div>
        ))}
      </section>
    </Box>
  );
};

export default ImageContainer;
