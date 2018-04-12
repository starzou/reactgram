/**
 * @module api
 * @description Just a test
 * @date 2018-04-11
 **/

import fetch from 'node-fetch';


const PIXABAY_API_KEY = '8661423-05c43e946f1cb70c3355bd6a3';
const DEFAULT_IMAGES = [];
const WIDTH_REGEXP = /(\d{3,5})(?=\.(jpe?g|png|gif))/gi;


function getImageSrcAndWidth(url) {
  if (typeof url !== 'string') {
    return '';
  }

  let widths = url.match(WIDTH_REGEXP);

  if (widths && widths.length) {
    return `${url} ${widths[0]}w`;
  }

  return url;
}


function formatImages(result) {
  if (!result) {
    return DEFAULT_IMAGES;
  }

  let { hits } = result;

  if (!hits || !hits.length) {
    return DEFAULT_IMAGES;
  }

  return hits.map(img => {
    return {
      src: img.webformatURL,
      srcSet: [
        getImageSrcAndWidth(img.largeImageURL),
        getImageSrcAndWidth(img.webformatURL),
        getImageSrcAndWidth(img.previewURL)
      ],
      width: img.webformatWidth,
      height: img.webformatHeight,
      caption: img.tags,
      alt: img.user
    };
  });
}


export async function searchImages(q, page = 1) {
  try {
    let res = await fetch(`https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${q}&page=${page}`);
    let result = await res.json();

    return formatImages(result);
  } catch (err) {
    console.error(err);

    return DEFAULT_IMAGES;
  }
}

