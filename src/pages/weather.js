import Header from '@/containers/Header';
import Wrapper from '@/components/Wrapper';
import NewsHistory from '@/containers/NewsHistory';
import Footer from '@/containers/Footer';
import { withIronSessionSsr } from 'iron-session/next';
import { sessionOptions } from '../../sessionOptions';
import WeatherContent from '@/containers/WeatherContent';

const Weather = ({
  token,
}) => {
  return (
    <>
      <Header token={token} currentTab='weather' />
      <Wrapper>
        <WeatherContent />
      </Wrapper>
      <Footer />
    </>
  )
}

const getServerSideCb = async ({ locale, req, res}) => {
  const token = req.session.token ? req.session.token.avatarId : null;
  return {
    props: {
      token: token,
    }
  }
};

export const getServerSideProps = withIronSessionSsr(getServerSideCb, sessionOptions);

export default Weather;