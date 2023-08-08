import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styles from './WeatherContent.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from '@/store/weatherSlice';
import { format } from 'date-fns';
import cn from 'classnames';

const WeatherContent = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const weather = useSelector((state) => state.weather.data);
  
  useEffect(() => {
    dispatch(getWeather('Tashkent'));
  }, []);
  
  const cities = useMemo(() => [
    {
      id: 1,
      label: 'Tashkent'
    },
    {
      id: 2,
      label: 'Samarkand'
    },
    {
      id: 3,
      label: 'Bukhara'
    },
    {
      id: 4,
      label: 'Andijan'
    },
    {
      id: 6,
      label: 'Nukus'
    },
    {
      id: 7,
      label: 'Kokand'
    },
    {
      id: 8,
      label: 'Navoi'
    },
    {
      id: 9,
      label: 'Termez'
    },
  ], []);
  
  const handleSelectCity = useCallback((city) => async () => {
    await dispatch(getWeather(city));
  }, []);
  
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    await dispatch(getWeather(value));
    setValue('');
  }, [value]);
  
  const handleChangeValue = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  
  const weatherData = weather.length > 0
    ? {
      temperature: Math.ceil(weather[0].main.temp),
      city: weather[0].name,
      date: format(new Date(),"HH:mm - EEEE, dd MMM ''yy"),
      weatherId: weather[0].weather[0]?.id,
      weather: weather[0].weather[0]?.main,
      icon: weather[0].weather[0]?.icon,
      clouds: weather[0].clouds.all,
      humidity: weather[0].main.humidity,
      pressure: weather[0].main.pressure,
      wind: weather[0].wind.speed,
    } : null;
  
  const getUrlById = (id) => {
    if (!id) return '/baloon.png';
    if (id > 199 && id < 300) return '/thunderstorm.png';
    if (id > 299 && id < 400) return '/drizzle.png';
    if (id > 499 && id < 600) return '/rain.png';
    if (id > 599 && id < 700) return '/snow.png';
    if (id > 700 && id < 800) return '/smoke.png';
    if (id === 800) return '/sun.png';
    if (id > 800 && id < 900) return '/clouds.png'
  };
  
  return (
    <div className={styles.weather}>
      <div className={styles.weatherContainer} style={{ backgroundImage: `url(${getUrlById(weatherData?.weatherId)})`}}>
        <div className={styles.dataContainer}>
          {
            weatherData && (
              <>
                <div className={styles.temperature}>
                  {`${weatherData.temperature}°`}
                </div>
                <div className={styles.info}>
                  <div className={styles.cityInfo}>
                    {weatherData.city}
                  </div>
                  <div className={styles.dateInfo}>
                    {weatherData.date}
                  </div>
                </div>
                <div className={styles.iconWeather}>
                  <div className={styles.icon}>
                    <img src={`https://openweathermap.org/img/wn/${weatherData.icon}.png`} alt="" />
                  </div>
                  <div>{weatherData.weather}</div>
                </div>
              </>
            )
          }
        </div>
        <div className={styles.leftForm}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              className={styles.searchInput}
              value={value}
              placeholder={'Another Location'}
              onChange={handleChangeValue}
            />
            <button type='submit' className={styles.loop}>
              <img src="/loop.svg" alt="loop" />
            </button>
          </form>
          <div className={styles.cities}>
            {
              cities.map((city) => (
                <div key={city.id} className={styles.city} onClick={handleSelectCity(city.label)}>
                  {city.label}
                </div>
              ))
            }
          </div>
          {
            weatherData && (
              <div className={styles.weatherDetail}>
                <h3>{'Weather Detail'}</h3>
                <div className={styles.detailItem}>
                  <span>{'Cloudy'}</span>
                  <span>{`${weatherData.clouds} %`}</span>
                </div>
                <div className={styles.detailItem}>
                  <span>{'Humidity'}</span>
                  <span>{`${weatherData.humidity} %`}</span>
                </div>
                <div className={styles.detailItem}>
                  <span>{'Wind'}</span>
                  <span>{`${weatherData.wind} km/h`}</span>
                </div>
                <div className={styles.detailItem}>
                  <span>{'Pressure'}</span>
                  <span>{`${weatherData.pressure} Pha`}</span>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default WeatherContent;
