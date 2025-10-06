
export default async function fetchNpmDataForList() {
  let response;

  try {
    response = await fetch('/.netlify/functions/fetchNpmDataForList');

    if (!response.ok) {
      return {
        status: 'error',
        data: {},
      };
    }
  } catch (err) {
    console.error(err);
    return {
      status: 'error',
      data: {},
    };
  }

  try {
    const json = await response.json();
    return {
      status: 'loaded',
      data: json.data,
    };
  } catch (err) {
    console.warn(
      `Unparsable JSON returned from Netlify function. It's likely not available in this environment.`
    );
    return {
      status: 'error',
      data: {},
    };
  }
}

