export const convertAwsLink = (url) => {
  let awsFileName = url.split('/');
  awsFileName = awsFileName[awsFileName.length - 1];
  return awsFileName;
};
