import firstLast from './firstLast';
import toCamelcase from './toCamelcase';
import toSentence from './toSentence';
import toSlug from './toSlug';
import toTitlecase from './toTitlecase';

String.prototype.toCamelcase = toCamelcase;
String.prototype.firstLast = firstLast;
String.prototype.toSentence = toSentence;
String.prototype.toSlug = toSlug;
String.prototype.toTitlecase = toTitlecase;
