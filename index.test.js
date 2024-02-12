const { getNumberOfUnique, getTop3CountValues } = require('./index');

test('Test data with provided data', () => {
  expect(getNumberOfUnique('/programming-task-example-data.log', 'ipAddress')).toBe(11);
  expect(getTop3CountValues('/programming-task-example-data.log', 'resource')).toStrictEqual(
    [
      { count: 2, value: ['/docs/manage-websites/'] },
      {
        count: 1,
        value: [
          '/intranet-analytics/',
          'http://example.net/faq/',
          '/this/page/does/not/exist/',
          'http://example.net/blog/category/meta/',
          '/blog/2018/08/survey-your-opinion-matters/',
          '/docs/manage-users/',
          '/blog/category/community/',
          '/faq/',
          '/faq/how-to-install/',
          '/asset.js',
          '/to-an-error',
          '/',
          '/docs/',
          '/moved-permanently',
          '/temp-redirect',
          '/faq/how-to/',
          '/translations/',
          '/newsletter/',
          '/hosting/',
          '/download/counter/',
          '/asset.css'
        ]
      }
    ]

  );
  expect(getTop3CountValues('/programming-task-example-data.log', 'ipAddress')).toStrictEqual(
    [
      { count: 4, value: ['168.41.191.40'] },
      {
        count: 3,
        value: ['177.71.128.21', '50.112.00.11', '72.44.32.10']
      },
      {
        count: 2,
        value: ['168.41.191.9', '168.41.191.34', '168.41.191.43']
      }
    ]
  );
});

test('Test data with 6 unique Ip address', () => {
  expect(getNumberOfUnique('/testData/test-1.log', 'ipAddress')).toBe(6);
  expect(getTop3CountValues('/testData/test-1.log', 'resource')).toStrictEqual(
    [
      {
        count: 1,
        value: [
          '/intranet-analytics/',
          'http://example.net/faq/',
          '/this/page/does/not/exist/',
          'http://example.net/blog/category/meta/',
          '/blog/2018/08/survey-your-opinion-matters/',
          '/docs/manage-users/',
          '/blog/category/community/',
          '/faq/',
          '/docs/manage-websites/',
          '/faq/how-to-install/'
        ]
      }
    ]

  );
  expect(getTop3CountValues('/testData/test-1.log', 'ipAddress')).toStrictEqual(
    [
      { count: 3, value: ['177.71.128.21', '168.41.191.40'] },
      {
        count: 1,
        value: [
          '168.41.191.41',
          '168.41.191.9',
          '168.41.191.34',
          '50.112.00.28'
        ]
      }
    ]
  );
});

test('Test data with 13 unique Ip address', () => {
  expect(getNumberOfUnique('/testData/test-2.log', 'ipAddress')).toBe(13);
  expect(getTop3CountValues('/testData/test-2.log', 'resource')).toStrictEqual(
    [
      { count: 5, value: [ '/docs/manage-websites/' ] },
      {
        count: 4,
        value: [
          '/intranet-analytics/',
          'http://example.net/faq/',
          '/this/page/does/not/exist/',
          'http://example.net/blog/category/meta/',
          '/blog/2018/08/survey-your-opinion-matters/',
          '/docs/manage-users/',
          '/blog/category/community/',
          '/faq/'
        ]
      },
      { count: 3, value: [ '/faq/how-to-install/' ] }
    ]


  );
  expect(getTop3CountValues('/testData/test-2.log', 'ipAddress')).toStrictEqual(
    [
      { count: 14, value: [ '168.41.191.40' ] },
      { count: 11, value: [ '177.71.128.21' ] },
      { count: 6, value: [ '168.41.191.9', '168.41.191.34' ] }
    ]

  );
});





