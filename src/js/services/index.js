import angular from 'angular';

// Create the module where our functionality can attach to
let servicesModule = angular.module('app.services', []);

import UserService from './user.service';
servicesModule.service( 'User', UserService );

import ProfileService from './profile.service';
servicesModule.service('Profile', ProfileService);

import ArticleService from './article.service';
servicesModule.service('Article', ArticleService);

import JwtService from './jwt.service';
servicesModule.service('JWT', JwtService);

export default servicesModule;
