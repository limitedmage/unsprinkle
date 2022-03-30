import React from "react";
import styled from "styled-components/macro";

const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <Picture>
          <source
            srcSet={`
            ${src.replace(".jpg", ".avif")} 1x,
            ${src.replace(".jpg", "@2x.avif")} 2x,
            ${src.replace(".jpg", "@3x.avif")} 3x
          `}
            type="image/avif"
          />
          <source
            srcSet={`
            ${src} 1x,
            ${src.replace(".jpg", "@2x.jpg")} 2x,
            ${src.replace(".jpg", "@3x.jpg")} 3x
          `}
            type="image/jpg"
          />
          <Image src={src} alt="" />
        </Picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Picture = styled.picture`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.li`
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
`;

export default PhotoGridItem;
