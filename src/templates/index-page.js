import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import AboutSection from '../components/AboutSection';
import Section from '../components/Section';
import TourSection from '../components/TourSection';
import MediaSection from '../components/MediaSection';
import MerchSection from '../components/MerchSection';
import ContactSection from '../components/ContactSection';

// eslint-disable-next-line
export const IndexPageTemplate = ({
  spotifyPlaylists,
  aboutSection,
  bandsintownWidget,
  images,
  jumbotron,
}) => {
  const imageJpg =
    jumbotron.image.childImageSharp.gatsbyImageData.images.fallback;
  const imageWebp =
    jumbotron.image.childImageSharp.gatsbyImageData.images.sources[0];
  return (
    <div>
      <div class="jumbotron" id="home">
        <picture>
          <source srcSet={imageWebp.srcSet} sizes={imageWebp.sizes} />
          <img src={imageJpg.src} />
        </picture>
        <h1 className="header-text">{jumbotron.text}</h1>
      </div>
      <div className="container-xl">
        {/* <FullWidthImage img={heroImage} title={title} subheading={subheading} /> */}

        <Section title="About">
          <AboutSection
            sectionContent={aboutSection.text}
            fontSize={aboutSection.fontSize}
          />
        </Section>
        <Section title="Tour">
          <TourSection bandsintownWidgetData={bandsintownWidget} />
        </Section>

        <Section title="Media">
          <MediaSection spotifyPlaylists={spotifyPlaylists} images={images} />
        </Section>

        <Section title="Merch">
          <MerchSection />
        </Section>

        <Section title="Contact">
          <ContactSection />
        </Section>
      </div>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  aboutSection: PropTypes.shape({
    text: PropTypes.string,
    fontSize: PropTypes.number,
  }),
  spotifyPlaylists: PropTypes.arrayOf({
    url: PropTypes.string,
    height: PropTypes.number,
  }),
  images: PropTypes.arrayOf({
    galleryImage: PropTypes.object,
  }),
  bandsintownWidget: PropTypes.shape({
    displayStartTime: PropTypes.bool,
    displayPastDates: PropTypes.bool,
    displayPlayMyCity: PropTypes.bool,
    displayLimit: PropTypes.number,
    colorText: PropTypes.string,
    colorLink: PropTypes.string,
    colorLinkText: PropTypes.string,
    colorBackground: PropTypes.string,
  }),
  jumbotron: PropTypes.object,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <IndexPageTemplate
      title={frontmatter.title}
      heading={frontmatter.heading}
      aboutSection={frontmatter.aboutSection}
      subheading={frontmatter.subheading}
      mainpitch={frontmatter.mainpitch}
      description={frontmatter.description}
      intro={frontmatter.intro}
      spotifyPlaylists={frontmatter.spotifyPlaylists}
      bandsintownWidget={frontmatter.bandsintownWidget}
      images={frontmatter.images}
      jumbotron={frontmatter.jumbotron}
    />
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        aboutSection {
          text
          fontSize
        }
        images {
          galleryImage {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
            name
          }
        }
        jumbotron {
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
          text
        }
        spotifyPlaylists {
          url
          height
        }
        bandsintownWidget {
          displayLimit
          displayPastDates
          displayPlayMyCity
          displayStartTime
          colorBackground
          colorLink
          colorLinkText
          colorText
        }
      }
    }
  }
`;
