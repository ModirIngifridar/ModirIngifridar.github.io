import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header, SEO } from 'components';
import { Layout, Container } from 'layouts';

const About = center => (
  <Layout>
      <SEO
        title="Midnight Mediaeval Thoughts"
      />
    <Helmet title={'About Page'} />
    <Header title="About Page">About this blog</Header>
    <Container center={center}>
      <p>This blog is mostly being written around midnight, while waiting for my newborn daughter to fall asleep. Though the author has a PhD in Old Norse literature, she has come to realize some theories and ideas simply cannot be defended in a peer-review process – they are not objective enough. Nevertheless, I believe they are still worth sharing.</p>
      <p>So far, my work has been as objective as possible. Yet in these past few weeks, I have come to realize how un-objective my understanding of the texts and culture was – which points I had overlooked because I hadn’t lived through certain moments. Despite my best efforts, certain aspects of history and literature remain hidden until you have experienced … let’s face it: pregnancy and motherhood. I would never had believed how much these would change a person, how far my understanding of literature would differ from the carefully drawn analysis of the mediaeval courtly discourse I had written some years ago.</p>
      <p>Regrettably, I find my thesis insufficient – and wish I could make it complete and rephrase some conclusions. But that is unfeasible within the same methodological boundaries. The sources and stories have not changed a bit, it was me and my personal feelings that shifted. My values and experience. I can see more missing spaces in the texts than before and find it fascinating. And scary, how easily they can be overlooked. My hobby since I was a young girl, heroic poetry and courtly epics, suddenly seem so foreign to me. And I barely can see the reflections of my recent experience there – the chivalric culture allegedly being so “female-oriented”. Yes, I know. Parceval is a nice example of a mother’s love for her child… Yes, there are pregnant women in chivalric sagas. Yes, there are babies being born in the Icelandic family sagas and in the sagas of antiquity. But even if I take the “saga style” into account, something is not right and I do want to find out what is bothering me here.</p>
      <p>Therefore, I have decided to take a break from peer-reviewed articles for a while and to enjoy reading literature from a new perspective. From my very personal perspective. Because I cannot shake the feeling there is much more “female” missing from the narratives than I was willing to admit in my thesis. Let me enjoy my maternal leave in a different way. Let’s see what my midnight thoughts will bring to light.</p>
      <p>Disclaimer: The author is not a native English speaker. Nor has she the time to re-read everything before posting it. She is writing spontaneously and (for the time being) under the influence of prolactin.</p>
    </Container>
  </Layout>
);

export default About;

About.propTypes = {
  center: PropTypes.object,
};
