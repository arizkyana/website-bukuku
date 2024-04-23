import { google } from 'googleapis';
export const fetchDataFromSpreadsheet = async (id: string, range: string) => {
  // Load credentials from a JSON file
  const auth = await google.auth.getClient({
    projectId: 'kurabe-kids-store',
    credentials: {
      type: 'service_account',
      private_key:
        '-----BEGIN PRIVATE KEY-----\nMIIEuwIBADANBgkqhkiG9w0BAQEFAASCBKUwggShAgEAAoIBAQC0HS1+dKt7YxhM\nw00dgLmtDmaOkDTXypFZ/rBjTpTPFmchSKpt0b9yrnZm7xGlcQsYpOhFlWWNFGdb\nq8c/ExM13viA3nsyn6yQ4ilQKvVyYKMDrqRbFpzcnXHv4IaloF+Nao/vQgt/KTwb\nRdNgtoIPEBxz7pGzM14ihbM1tGjLZq6IIkPE6IOb2FMyOu8dxD4zELB6jPzkeeAk\nr2/8714BFPC/qiMhna/wnG3ir0jiIAuwrAi0bK4/77sccD0gEeJIVWtaW9C2nJa4\nkjNUXviKupZU3mo+otX9p6veXqZfZRWUcJbEg2idaS1vHL/6rhpqsfpWW1gBPqbf\nSI9/stjBAgMBAAECggEAINtnxrda5w3rS2mfYj/u31qOq/gzo6ARBwVWwS7/J44T\nLze124XVcoLQF7QKGI+4Mf03YCZCWcu8lTUPinqc2Ql9dOjhOZl2XhHb7oN/tidZ\n5ZyQ4AsOf5J7TAK+HW3VsJMdgcyfE0n+7Iy+5Fg2/q92OVHuo22+APc5+5SXP2+E\nEhivDIaSiIA4C+n0XBArCyzsZTvid0HcuKdCwc2VhcjOCSVjKkAj3ko+y8qt7Ltw\nRA6j44dEzA2bZkEr/FhfCtzFACTmg9yUrK748+UGOyd6aZ88IpUKTLAkYlDvawt8\no8wD1DO+IZSCYz7045VHiGbZt9DHENYy38dnhhwdqQKBgQDZtB1Qnapo/trvX5+R\n3Om+xpIYUEduQ5Kt65HgMO+96/paV5sl8y+5y4eVq1wIDcwvGN8BdjaCP99SHDMA\nBFm4A53c5GF1oQ+Iz87pmuqMtdxCuHbndqI/hsJoVpZfEpFhCRkCRPFU0GR+kAe4\nNJID72zGvS+c+Evgu1HBGzduxQKBgQDTzEis2c0C5aYGYqZ+N8YfCadtTd1IlZyQ\nArTCTCV/WxsVeIFTi/QvSUb4UCHkafZ1mQi9Jr1oY1MtFJGvdnABr7A5vkI+44Hj\nBkmxXWxeCbMtspL2Zzv/+0U2dXT3nO8ezIemI0T7/mHh+mh7zwOJHxdKQplmA2LV\nQiOuS2ThzQKBgQCNAkXunoDvSwvh+izwHIfmQtYEG5N4zxnlvuyYqvnOKVfaRl4+\nwXqLPFJQ1lJhARbc9p4TY09BJD/w/kTmYOr/7o/EsMSTnUPjmL5rvyTnCTBmovaZ\nS9Uhkpa/YD47zFoP4QWq2575EZXWCFKHtL1TATSSsZ1ybb0wDgSRMKDCBQJ/Hcic\nb7IxIjcpIby9rQIq2jKBWN2aQJrJaXb39FrA6yfkpyBLD3Se4gdr839RRM2h2ueq\nUu8fs45EJBLAaew90/7gyT34Et/rZAF+W3LHynGSwNpb0Eq0JUswcHgT+r4W4j3g\n1XwgN0+OdDjCeKaj2KSGoeq7p5zSSSsD2X7AsQKBgDsnXPR+VIKjPq09v8/oUgwq\n1wN1t19+ACDftmFxtH6HwAGfbfs92mMGnmAk760csFrJvwoOfisrQyNxDvOdiheo\nElMAYemRV7PP0kpF6RwMHBeBhbXmepbslQ8gW3VuKHd9cu9/mfwKIxzoWJbKHvZQ\nSnVN6FBCDNDbIZ1HLVzP\n-----END PRIVATE KEY-----\n',
      client_email: 'kurabe-kids-store@appspot.gserviceaccount.com',
      client_id: '113925387886380364151',
      token_url: 'https://oauth2.googleapis.com/token',
      universe_domain: 'googleapis.com',
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  // Create a client instance
  //   const client = await auth.getClient();

  // Create Google Sheets API instance
  //   const sheets = google.sheets({ version: 'v4', auth: client });
  const sheets = google.sheets({ version: 'v4', auth });

  // Specify the spreadsheet ID and range
  //   const spreadsheetId = '1_Q4cDumXzWSlWDUPjGPd4lhsJ6-xblCU9NtxVEqhBk4';
  //   const range = 'Sheet1!A1:C500';

  // Fetch data from the spreadsheet
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: id,
    range,
  });

  // Extract the values from the response
  const values = response.data.values;

  // Process the data as needed
  console.log(values);
  return values;
};
