import axios from 'axios';
import React, {useState, useEffect} from 'react'
import data from './../../../src/data.json';
import {PortfolioSection, PortfolioTitle, PortfolioList, PortfolioItem, Span, Overlay, OverlaySpan, Image, ImageWrapper} from './style.js';

const Portfolio = () => {
    // const [images, setImages] = useState([])

    // useEffect( () => {
    //   axios.get('js/data.json').then(res => {setImages(res.data.portfolio)})
    // }, [])

    const PortfolioImages = data.portfolio.map(imageItem => {
      return(
        <ImageWrapper key={imageItem.id}>
          <Image src={imageItem.image} alt=""/>
          <Overlay>
              <OverlaySpan>
                  Show Image
              </OverlaySpan>
          </Overlay>
        </ImageWrapper>
      );
    })

    return (
        <PortfolioSection id='portfolio'>
            <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
            <PortfolioList>
                <PortfolioItem active>All</PortfolioItem>
                <PortfolioItem>HTML</PortfolioItem>
                <PortfolioItem>Photoshop</PortfolioItem>
                <PortfolioItem>Wordpress</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
            </PortfolioList>
            
            <div class="box">
                {PortfolioImages}
            </div>
            
        </PortfolioSection>
    );
}


export default Portfolio;
