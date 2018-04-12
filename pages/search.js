/**
 * @module search
 * @description
 * @date 2018-04-11
 **/

import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import { searchImages } from '../lib/api.js';


export default class SearchPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImage: 0
    };
  }

  static async getInitialProps({ query: { q, page } }) {
    let images = await searchImages(q, page);

    return {
      images
    };
  }


  render() {
    return (
      <div>
        <Gallery photos={this.props.images} onClick={this.openLightBox}/>

        <Lightbox
          images={this.props.images}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightBoxIsOpen}
          onClickPrev={this.goPrevious}
          onClickNext={this.goNext}
          onClose={this.closeLightBox}
        />

      </div>
    );
  }

  openLightBox = (event, data) => {
    this.setState({
      currentImage: data.index,
      lightBoxIsOpen: true
    });
  };

  closeLightBox = () => {
    this.setState({
      currentImage: 0,
      lightBoxIsOpen: false
    });
  };

  goPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  };

  goNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  };

}

