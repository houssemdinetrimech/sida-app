import React from 'react';
import Intro from './Intro'
import Quote from './Quote'
import CardSection from './Cards'
import { Helmet } from 'react-helmet'
import NoticeSection from './Notice'

const App = () => {
  return (
    <main>
      <Helmet>
        <title>Home - The Deadly Disease </title>
        <meta name="description" content="Driving awareness of Sida and Telling about" />
      </Helmet>
      <Intro />
      <Quote />
      <NoticeSection />
      <CardSection />
    </main>)
}
export default App;
