import Ember from 'ember';

const {
  RSVP
} = Ember;

export default {
  apiUrl(videoId) {
    return `https://gdata.youtube.com/feeds/api/videos/${videoId}`;
  },
  embedUrl(videoId) {
    return `https://www.youtube.com/embed/${videoId}`;
  },
  thumbnailUrl(videoId) {
    return RSVP.resolve(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`);
  }
};
