import { queryC } from './queries/queryC.js';
import { queryCSharp } from './queries/queryCSharp.js';
import { queryCpp } from './queries/queryCpp.js';
import { queryGo } from './queries/queryGo.js';
import { queryJava } from './queries/queryJava.js';
import { queryJavascript } from './queries/queryJavascript.js';
import { queryPhp } from './queries/queryPhp.js';
import { queryPython } from './queries/queryPython.js';
import { queryRuby } from './queries/queryRuby.js';
import { queryRust } from './queries/queryRust.js';
import { querySwift } from './queries/querySwift.js';
import { queryTypescript } from './queries/queryTypescript.js';

export const lang2Query = {
  javascript: queryJavascript,
  typescript: queryTypescript,
  c: queryC,
  cpp: queryCpp,
  python: queryPython,
  rust: queryRust,
  go: queryGo,
  c_sharp: queryCSharp,
  ruby: queryRuby,
  java: queryJava,
  php: queryPhp,
  swift: querySwift,
};

export type SupportedLang = keyof typeof lang2Query;
