import React from 'react';
// мини компонент Image

type ImgProps = JSX.IntrinsicElements["img"]

const Image = ({imageName, className, ...props} : {imageName : string, className? : string} & ImgProps) => {
    return (
        <img alt={props.alt || "#"} src={`/images/${imageName}`} className={className} />
    );
};

export default React.memo(Image);