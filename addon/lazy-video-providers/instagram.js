import Ember from 'ember';

const {
  RSVP
} = Ember;

export default {
  embedUrl(videoId) {
    return `https://instagram.com/p/${videoId}/embed`;
  },
  thumbnailUrl(videoId) {
    return RSVP.resolve(`https://instagram.com/p/${videoId}/media/?size=l`);
  }
};
