module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env:{
      production:{
        Plugins:['react-native-paper/babel'],
      },
    },
  };
};
