import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFetchData(ipAddress) {
  const [data, setData] = useState({
    ip: '',
    isp: '',
    city: '',
    region: '',
    postalCode: '',
    timeZone: '',
    lat: 0,
    lng: 0,
  });
  const [errors, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_A4q003CGnpOUuyvvsnD7rfsEP2XEq&ipAddress=${ipAddress}`,
        );
        const data = await response.data;

        setData({
          ip: data.ip || 'N/A',
          isp: data.isp || 'N/A',
          city: data.location.city || 'Unknown City',
          region: data.location.region || 'Unknown Region',
          postalCode: data.location.postalCode || 'N/A',
          timeZone: data.location.timezone || 'N/A',
          lat: data.location.lat || 0,
          lng: data.location.lng || 0,
        });
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [ipAddress]);

  return { data, errors, loading };
}
