const origin = 'http://localhost:8000';

class ApiService {
  get = async <Success>(path: string) => {
    try {
      const response = await fetch(`${origin}/${path}`);

      if (response.ok) {
        const data: Success = await response.json();

        return data;
      }
    } catch (e) {
      console.log(e);
    }
  };
}

export default ApiService;
