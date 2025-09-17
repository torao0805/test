"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => GitHubPullPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");

// node_modules/.pnpm/fflate@0.8.2/node_modules/fflate/esm/browser.js
var u8 = Uint8Array;
var u16 = Uint16Array;
var i32 = Int32Array;
var fleb = new u8([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]);
var fdeb = new u8([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]);
var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
var freb = function(eb, start) {
  var b = new u16(31);
  for (var i = 0; i < 31; ++i) {
    b[i] = start += 1 << eb[i - 1];
  }
  var r = new i32(b[30]);
  for (var i = 1; i < 30; ++i) {
    for (var j = b[i]; j < b[i + 1]; ++j) {
      r[j] = j - b[i] << 5 | i;
    }
  }
  return { b, r };
};
var _a = freb(fleb, 2);
var fl = _a.b;
var revfl = _a.r;
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0);
var fd = _b.b;
var revfd = _b.r;
var rev = new u16(32768);
for (i = 0; i < 32768; ++i) {
  x = (i & 43690) >> 1 | (i & 21845) << 1;
  x = (x & 52428) >> 2 | (x & 13107) << 2;
  x = (x & 61680) >> 4 | (x & 3855) << 4;
  rev[i] = ((x & 65280) >> 8 | (x & 255) << 8) >> 1;
}
var x;
var i;
var hMap = function(cd, mb, r) {
  var s = cd.length;
  var i = 0;
  var l = new u16(mb);
  for (; i < s; ++i) {
    if (cd[i])
      ++l[cd[i] - 1];
  }
  var le = new u16(mb);
  for (i = 1; i < mb; ++i) {
    le[i] = le[i - 1] + l[i - 1] << 1;
  }
  var co;
  if (r) {
    co = new u16(1 << mb);
    var rvb = 15 - mb;
    for (i = 0; i < s; ++i) {
      if (cd[i]) {
        var sv = i << 4 | cd[i];
        var r_1 = mb - cd[i];
        var v = le[cd[i] - 1]++ << r_1;
        for (var m = v | (1 << r_1) - 1; v <= m; ++v) {
          co[rev[v] >> rvb] = sv;
        }
      }
    }
  } else {
    co = new u16(s);
    for (i = 0; i < s; ++i) {
      if (cd[i]) {
        co[i] = rev[le[cd[i] - 1]++] >> 15 - cd[i];
      }
    }
  }
  return co;
};
var flt = new u8(288);
for (i = 0; i < 144; ++i)
  flt[i] = 8;
var i;
for (i = 144; i < 256; ++i)
  flt[i] = 9;
var i;
for (i = 256; i < 280; ++i)
  flt[i] = 7;
var i;
for (i = 280; i < 288; ++i)
  flt[i] = 8;
var i;
var fdt = new u8(32);
for (i = 0; i < 32; ++i)
  fdt[i] = 5;
var i;
var flrm = /* @__PURE__ */ hMap(flt, 9, 1);
var fdrm = /* @__PURE__ */ hMap(fdt, 5, 1);
var max = function(a) {
  var m = a[0];
  for (var i = 1; i < a.length; ++i) {
    if (a[i] > m)
      m = a[i];
  }
  return m;
};
var bits = function(d, p, m) {
  var o = p / 8 | 0;
  return (d[o] | d[o + 1] << 8) >> (p & 7) & m;
};
var bits16 = function(d, p) {
  var o = p / 8 | 0;
  return (d[o] | d[o + 1] << 8 | d[o + 2] << 16) >> (p & 7);
};
var shft = function(p) {
  return (p + 7) / 8 | 0;
};
var slc = function(v, s, e) {
  if (s == null || s < 0)
    s = 0;
  if (e == null || e > v.length)
    e = v.length;
  return new u8(v.subarray(s, e));
};
var ec = [
  "unexpected EOF",
  "invalid block type",
  "invalid length/literal",
  "invalid distance",
  "stream finished",
  "no stream handler",
  ,
  "no callback",
  "invalid UTF-8 data",
  "extra field too long",
  "date not in range 1980-2099",
  "filename too long",
  "stream finishing",
  "invalid zip data"
  // determined by unknown compression method
];
var err = function(ind, msg, nt) {
  var e = new Error(msg || ec[ind]);
  e.code = ind;
  if (Error.captureStackTrace)
    Error.captureStackTrace(e, err);
  if (!nt)
    throw e;
  return e;
};
var inflt = function(dat, st, buf, dict) {
  var sl = dat.length, dl = dict ? dict.length : 0;
  if (!sl || st.f && !st.l)
    return buf || new u8(0);
  var noBuf = !buf;
  var resize = noBuf || st.i != 2;
  var noSt = st.i;
  if (noBuf)
    buf = new u8(sl * 3);
  var cbuf = function(l2) {
    var bl = buf.length;
    if (l2 > bl) {
      var nbuf = new u8(Math.max(bl * 2, l2));
      nbuf.set(buf);
      buf = nbuf;
    }
  };
  var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
  var tbts = sl * 8;
  do {
    if (!lm) {
      final = bits(dat, pos, 1);
      var type = bits(dat, pos + 1, 3);
      pos += 3;
      if (!type) {
        var s = shft(pos) + 4, l = dat[s - 4] | dat[s - 3] << 8, t = s + l;
        if (t > sl) {
          if (noSt)
            err(0);
          break;
        }
        if (resize)
          cbuf(bt + l);
        buf.set(dat.subarray(s, t), bt);
        st.b = bt += l, st.p = pos = t * 8, st.f = final;
        continue;
      } else if (type == 1)
        lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
      else if (type == 2) {
        var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
        var tl = hLit + bits(dat, pos + 5, 31) + 1;
        pos += 14;
        var ldt = new u8(tl);
        var clt = new u8(19);
        for (var i = 0; i < hcLen; ++i) {
          clt[clim[i]] = bits(dat, pos + i * 3, 7);
        }
        pos += hcLen * 3;
        var clb = max(clt), clbmsk = (1 << clb) - 1;
        var clm = hMap(clt, clb, 1);
        for (var i = 0; i < tl; ) {
          var r = clm[bits(dat, pos, clbmsk)];
          pos += r & 15;
          var s = r >> 4;
          if (s < 16) {
            ldt[i++] = s;
          } else {
            var c = 0, n = 0;
            if (s == 16)
              n = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i - 1];
            else if (s == 17)
              n = 3 + bits(dat, pos, 7), pos += 3;
            else if (s == 18)
              n = 11 + bits(dat, pos, 127), pos += 7;
            while (n--)
              ldt[i++] = c;
          }
        }
        var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
        lbt = max(lt);
        dbt = max(dt);
        lm = hMap(lt, lbt, 1);
        dm = hMap(dt, dbt, 1);
      } else
        err(1);
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
    }
    if (resize)
      cbuf(bt + 131072);
    var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
    var lpos = pos;
    for (; ; lpos = pos) {
      var c = lm[bits16(dat, pos) & lms], sym = c >> 4;
      pos += c & 15;
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
      if (!c)
        err(2);
      if (sym < 256)
        buf[bt++] = sym;
      else if (sym == 256) {
        lpos = pos, lm = null;
        break;
      } else {
        var add = sym - 254;
        if (sym > 264) {
          var i = sym - 257, b = fleb[i];
          add = bits(dat, pos, (1 << b) - 1) + fl[i];
          pos += b;
        }
        var d = dm[bits16(dat, pos) & dms], dsym = d >> 4;
        if (!d)
          err(3);
        pos += d & 15;
        var dt = fd[dsym];
        if (dsym > 3) {
          var b = fdeb[dsym];
          dt += bits16(dat, pos) & (1 << b) - 1, pos += b;
        }
        if (pos > tbts) {
          if (noSt)
            err(0);
          break;
        }
        if (resize)
          cbuf(bt + 131072);
        var end = bt + add;
        if (bt < dt) {
          var shift = dl - dt, dend = Math.min(dt, end);
          if (shift + bt < 0)
            err(3);
          for (; bt < dend; ++bt)
            buf[bt] = dict[shift + bt];
        }
        for (; bt < end; ++bt)
          buf[bt] = buf[bt - dt];
      }
    }
    st.l = lm, st.p = lpos, st.b = bt, st.f = final;
    if (lm)
      final = 1, st.m = lbt, st.d = dm, st.n = dbt;
  } while (!final);
  return bt != buf.length && noBuf ? slc(buf, 0, bt) : buf.subarray(0, bt);
};
var et = /* @__PURE__ */ new u8(0);
var b2 = function(d, b) {
  return d[b] | d[b + 1] << 8;
};
var b4 = function(d, b) {
  return (d[b] | d[b + 1] << 8 | d[b + 2] << 16 | d[b + 3] << 24) >>> 0;
};
var b8 = function(d, b) {
  return b4(d, b) + b4(d, b + 4) * 4294967296;
};
function inflateSync(data, opts) {
  return inflt(data, { i: 2 }, opts && opts.out, opts && opts.dictionary);
}
var td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
var tds = 0;
try {
  td.decode(et, { stream: true });
  tds = 1;
} catch (e) {
}
var dutf8 = function(d) {
  for (var r = "", i = 0; ; ) {
    var c = d[i++];
    var eb = (c > 127) + (c > 223) + (c > 239);
    if (i + eb > d.length)
      return { s: r, r: slc(d, i - 1) };
    if (!eb)
      r += String.fromCharCode(c);
    else if (eb == 3) {
      c = ((c & 15) << 18 | (d[i++] & 63) << 12 | (d[i++] & 63) << 6 | d[i++] & 63) - 65536, r += String.fromCharCode(55296 | c >> 10, 56320 | c & 1023);
    } else if (eb & 1)
      r += String.fromCharCode((c & 31) << 6 | d[i++] & 63);
    else
      r += String.fromCharCode((c & 15) << 12 | (d[i++] & 63) << 6 | d[i++] & 63);
  }
};
function strFromU8(dat, latin1) {
  if (latin1) {
    var r = "";
    for (var i = 0; i < dat.length; i += 16384)
      r += String.fromCharCode.apply(null, dat.subarray(i, i + 16384));
    return r;
  } else if (td) {
    return td.decode(dat);
  } else {
    var _a2 = dutf8(dat), s = _a2.s, r = _a2.r;
    if (r.length)
      err(8);
    return s;
  }
}
var slzh = function(d, b) {
  return b + 30 + b2(d, b + 26) + b2(d, b + 28);
};
var zh = function(d, b, z) {
  var fnl = b2(d, b + 28), fn = strFromU8(d.subarray(b + 46, b + 46 + fnl), !(b2(d, b + 8) & 2048)), es = b + 46 + fnl, bs = b4(d, b + 20);
  var _a2 = z && bs == 4294967295 ? z64e(d, es) : [bs, b4(d, b + 24), b4(d, b + 42)], sc = _a2[0], su = _a2[1], off = _a2[2];
  return [b2(d, b + 10), sc, su, fn, es + b2(d, b + 30) + b2(d, b + 32), off];
};
var z64e = function(d, b) {
  for (; b2(d, b) != 1; b += 4 + b2(d, b + 2))
    ;
  return [b8(d, b + 12), b8(d, b + 4), b8(d, b + 20)];
};
function unzipSync(data, opts) {
  var files = {};
  var e = data.length - 22;
  for (; b4(data, e) != 101010256; --e) {
    if (!e || data.length - e > 65558)
      err(13);
  }
  ;
  var c = b2(data, e + 8);
  if (!c)
    return {};
  var o = b4(data, e + 16);
  var z = o == 4294967295 || c == 65535;
  if (z) {
    var ze = b4(data, e - 12);
    z = b4(data, ze) == 101075792;
    if (z) {
      c = b4(data, ze + 32);
      o = b4(data, ze + 48);
    }
  }
  var fltr = opts && opts.filter;
  for (var i = 0; i < c; ++i) {
    var _a2 = zh(data, o, z), c_2 = _a2[0], sc = _a2[1], su = _a2[2], fn = _a2[3], no = _a2[4], off = _a2[5], b = slzh(data, off);
    o = no;
    if (!fltr || fltr({
      name: fn,
      size: sc,
      originalSize: su,
      compression: c_2
    })) {
      if (!c_2)
        files[fn] = slc(data, b, b + sc);
      else if (c_2 == 8)
        files[fn] = inflateSync(data.subarray(b, b + sc), { out: new u8(su) });
      else
        err(14, "unknown compression type " + c_2);
    }
  }
  return files;
}

// src/main.ts
var DEFAULT_SETTINGS = {
  repository: "",
  branch: "main",
  subpath: "",
  token: "",
  excludePatterns: "",
  protectPatterns: "",
  dryRunByDefault: true,
  lastSyncSummary: ""
};
var GitHubClient = class {
  async testConnection(options) {
    const { repository, branch, token } = options;
    const url = `https://api.github.com/repos/${repository}/branches/${encodeURIComponent(branch)}`;
    const response = await fetch(url, {
      method: "GET",
      headers: this.buildHeaders(token)
    });
    const remaining = response.headers.get("x-ratelimit-remaining");
    if (response.ok) {
      return {
        ok: true,
        status: response.status,
        message: "\u63A5\u7D9A\u306B\u6210\u529F\u3057\u307E\u3057\u305F\u3002\u30D6\u30E9\u30F3\u30C1\u304C\u78BA\u8A8D\u3067\u304D\u307E\u3057\u305F\u3002",
        rateLimitRemaining: remaining ? Number(remaining) : void 0
      };
    }
    let message = `GitHub API \u304B\u3089\u30A8\u30E9\u30FC\u304C\u8FD4\u3055\u308C\u307E\u3057\u305F (status: ${response.status})`;
    try {
      const body = await response.json();
      if (body && typeof body.message === "string" && body.message.length > 0) {
        message = body.message;
      }
    } catch (error) {
      console.error("GitHub API \u5FDC\u7B54\u306E\u89E3\u6790\u306B\u5931\u6557\u3057\u307E\u3057\u305F", error);
    }
    return {
      ok: false,
      status: response.status,
      message,
      rateLimitRemaining: remaining ? Number(remaining) : void 0
    };
  }
  async downloadRepositoryZip(options) {
    const { repository, branch, token } = options;
    const url = `https://api.github.com/repos/${repository}/zipball/${encodeURIComponent(branch)}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        ...this.buildHeaders(token),
        Accept: "application/vnd.github+json"
      }
    });
    if (!response.ok) {
      throw new Error(`zipball \u306E\u53D6\u5F97\u306B\u5931\u6557\u3057\u307E\u3057\u305F (status: ${response.status})`);
    }
    const buffer = await response.arrayBuffer();
    return new Uint8Array(buffer);
  }
  buildHeaders(token) {
    const headers = {
      Accept: "application/vnd.github+json"
    };
    if (token && token.trim().length > 0) {
      headers.Authorization = `token ${token.trim()}`;
    }
    return headers;
  }
};
function compilePatterns(source) {
  return source.split(/\r?\n/).map((pattern) => pattern.trim()).filter((pattern) => pattern.length > 0).map((pattern) => globToRegExp(pattern));
}
function globToRegExp(pattern) {
  const normalized = pattern.replace(/\\+/g, "/");
  let regex = "";
  for (let index = 0; index < normalized.length; index += 1) {
    const char = normalized[index];
    if (char === "*") {
      const next = normalized[index + 1];
      if (next === "*") {
        regex += ".*";
        index += 1;
      } else {
        regex += "[^/]*";
      }
    } else if (char === "?") {
      regex += ".";
    } else {
      regex += escapeRegExp(char);
    }
  }
  return new RegExp(`^${regex}$`);
}
function escapeRegExp(input) {
  return input.replace(/[\\^$+?.()|[\]{}]/g, "\\$&");
}
function matchesAny(target, patterns) {
  return patterns.some((pattern) => pattern.test(target));
}
function normalizeSubpath(subpath) {
  const trimmed = subpath.trim().replace(/\\+/g, "/");
  return trimmed.replace(/^\/+/, "").replace(/\/+$/, "");
}
function arrayBuffersEqual(a, b) {
  if (a.byteLength !== b.byteLength) {
    return false;
  }
  const viewA = new Uint8Array(a);
  const viewB = new Uint8Array(b);
  for (let i = 0; i < viewA.length; i += 1) {
    if (viewA[i] !== viewB[i]) {
      return false;
    }
  }
  return true;
}
var SyncController = class {
  constructor(app, client, settings) {
    this.app = app;
    this.client = client;
    this.settings = settings;
  }
  async performSync(request) {
    const start = Date.now();
    const settings = this.settings();
    request.onProgress?.("GitHub \u304B\u3089\u30EA\u30DD\u30B8\u30C8\u30EA\u3092\u53D6\u5F97\u3057\u3066\u3044\u307E\u3059\u2026");
    const zipData = await this.client.downloadRepositoryZip({
      repository: settings.repository,
      branch: settings.branch,
      token: settings.token || void 0
    });
    request.onProgress?.("\u30A2\u30FC\u30AB\u30A4\u30D6\u3092\u5C55\u958B\u3057\u3066\u3044\u307E\u3059\u2026");
    const files = unzipSync(zipData);
    const remotePaths = Object.keys(files);
    if (remotePaths.length === 0) {
      throw new Error("zip \u30A2\u30FC\u30AB\u30A4\u30D6\u306B\u30D5\u30A1\u30A4\u30EB\u304C\u542B\u307E\u308C\u3066\u3044\u307E\u305B\u3093\u3002");
    }
    const rootPrefix = this.detectRootPrefix(remotePaths);
    const excludePatterns = compilePatterns(settings.excludePatterns);
    const protectPatterns = compilePatterns(settings.protectPatterns);
    const normalizedSubpath = normalizeSubpath(settings.subpath);
    const adapter = this.app.vault.adapter;
    let created = 0;
    let updated = 0;
    let unchanged = 0;
    let excluded = 0;
    let protectedCount = 0;
    const syncedPaths = /* @__PURE__ */ new Set();
    for (const [entryPath, content] of Object.entries(files)) {
      if (entryPath.endsWith("/")) {
        continue;
      }
      const normalized = this.stripRootPrefix(entryPath, rootPrefix);
      if (!normalized) {
        continue;
      }
      let localPath = normalized;
      if (normalizedSubpath.length > 0) {
        if (normalized === normalizedSubpath) {
          const segments = normalized.split("/");
          localPath = segments[segments.length - 1] ?? normalized;
        } else if (normalized.startsWith(`${normalizedSubpath}/`)) {
          localPath = normalized.slice(normalizedSubpath.length + 1);
        } else {
          continue;
        }
      }
      if (localPath.length === 0) {
        continue;
      }
      syncedPaths.add(localPath);
      if (matchesAny(localPath, excludePatterns)) {
        excluded += 1;
        continue;
      }
      if (matchesAny(localPath, protectPatterns)) {
        protectedCount += 1;
        continue;
      }
      const buffer = this.toArrayBuffer(content);
      const exists = await adapter.exists(localPath);
      if (exists) {
        let isSame = false;
        try {
          const existing = await adapter.readBinary(localPath);
          isSame = arrayBuffersEqual(existing, buffer);
        } catch (error) {
          console.warn(`\u65E2\u5B58\u30D5\u30A1\u30A4\u30EB\u306E\u6BD4\u8F03\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${localPath}`, error);
        }
        if (isSame) {
          unchanged += 1;
          continue;
        }
        if (!request.dryRun) {
          await this.ensureParentFolders(localPath);
          await adapter.writeBinary(localPath, buffer);
        }
        updated += 1;
      } else {
        if (!request.dryRun) {
          await this.ensureParentFolders(localPath);
          await adapter.writeBinary(localPath, buffer);
        }
        created += 1;
      }
    }
    let deleted = 0;
    request.onProgress?.("\u4E0D\u8981\u306B\u306A\u3063\u305F\u30D5\u30A1\u30A4\u30EB\u3092\u524A\u9664\u3057\u3066\u3044\u307E\u3059\u2026");
    const localFiles = this.collectLocalFiles();
    for (const localPath of localFiles) {
      if (syncedPaths.has(localPath)) {
        continue;
      }
      if (matchesAny(localPath, excludePatterns)) {
        continue;
      }
      if (matchesAny(localPath, protectPatterns)) {
        continue;
      }
      if (this.shouldSkipDeletion(localPath)) {
        continue;
      }
      if (!request.dryRun) {
        try {
          await adapter.remove(localPath);
        } catch (error) {
          console.warn(`\u4E0D\u8981\u306B\u306A\u3063\u305F\u30D5\u30A1\u30A4\u30EB\u306E\u524A\u9664\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${localPath}`, error);
          continue;
        }
      }
      deleted += 1;
    }
    const durationMs = Date.now() - start;
    request.onProgress?.("\u540C\u671F\u51E6\u7406\u304C\u5B8C\u4E86\u3057\u307E\u3057\u305F\u3002");
    return {
      created,
      updated,
      unchanged,
      excluded,
      protected: protectedCount,
      deleted,
      dryRun: request.dryRun,
      durationMs
    };
  }
  detectRootPrefix(paths) {
    if (paths.length === 0) {
      return "";
    }
    const first = paths[0];
    const segments = first.split("/");
    return segments.length > 1 ? segments[0] : "";
  }
  stripRootPrefix(path, rootPrefix) {
    if (rootPrefix.length === 0) {
      return path;
    }
    if (path.startsWith(`${rootPrefix}/`)) {
      return path.slice(rootPrefix.length + 1);
    }
    return path;
  }
  toArrayBuffer(content) {
    const clone = content.slice();
    return clone.buffer;
  }
  async ensureParentFolders(path) {
    const folder = path.includes("/") ? path.substring(0, path.lastIndexOf("/")) : "";
    if (!folder) {
      return;
    }
    const parts = folder.split("/");
    let current = "";
    for (const part of parts) {
      current = current ? `${current}/${part}` : part;
      const exists = await this.app.vault.adapter.exists(current);
      if (!exists) {
        try {
          await this.app.vault.createFolder(current);
        } catch (error) {
          if (!(error instanceof Error) || !error.message.includes("already exists")) {
            throw error;
          }
        }
      }
    }
  }
  collectLocalFiles() {
    return this.app.vault.getFiles().map((file) => file.path);
  }
  shouldSkipDeletion(path) {
    return path === ".obsidian" || path.startsWith(".obsidian/") || path === ".trash" || path.startsWith(".trash/") || path === ".git" || path.startsWith(".git/");
  }
};
var GitHubPullSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(plugin) {
    super(plugin.app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "GitHub Pull Sync\uFF08\u8AAD\u307F\u53D6\u308A\u5C02\u7528\uFF09" });
    containerEl.createEl("p", {
      text: "GitHub \u30EA\u30DD\u30B8\u30C8\u30EA\u3092\u30E2\u30D0\u30A4\u30EB\u7AEF\u672B\u306E Vault \u306B\u8AAD\u307F\u53D6\u308A\u5C02\u7528\u3067\u540C\u671F\u3057\u307E\u3059\u3002push\u30FB\u30B3\u30DF\u30C3\u30C8\u64CD\u4F5C\u306F\u4E00\u5207\u884C\u3044\u307E\u305B\u3093\u3002"
    });
    containerEl.createEl("p", {
      text: "Token \u3092\u5165\u529B\u3057\u305F\u5834\u5408\u306F GitHub \u306E\u5229\u7528\u898F\u7D04\u306B\u5F93\u3063\u3066\u5B89\u5168\u306B\u7BA1\u7406\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u516C\u958B\u30EA\u30DD\u30B8\u30C8\u30EA\u3067\u306F Token \u306A\u3057\u3067\u3082\u52D5\u4F5C\u3057\u307E\u3059\u3002"
    });
    new import_obsidian.Setting(containerEl).setName("Repository (owner/repo)").setDesc("\u4F8B: user/my-notes").addText((text) => {
      text.setPlaceholder("owner/repo").setValue(this.plugin.settings.repository).onChange(async (value) => {
        this.plugin.settings.repository = value.trim();
        await this.plugin.saveSettings();
      });
    });
    new import_obsidian.Setting(containerEl).setName("Branch").setDesc("\u65E2\u5B9A\u5024\u306F main").addText((text) => {
      text.setPlaceholder("main").setValue(this.plugin.settings.branch).onChange(async (value) => {
        this.plugin.settings.branch = value.trim() || "main";
        await this.plugin.saveSettings();
      });
    });
    new import_obsidian.Setting(containerEl).setName("Subpath").setDesc("\u540C\u671F\u5BFE\u8C61\u3068\u3059\u308B\u30EA\u30DD\u30B8\u30C8\u30EA\u5185\u306E\u30B5\u30D6\u30D5\u30A9\u30EB\u30C0 (\u4EFB\u610F)").addText((text) => {
      text.setPlaceholder("docs").setValue(this.plugin.settings.subpath).onChange(async (value) => {
        this.plugin.settings.subpath = value.trim();
        await this.plugin.saveSettings();
      });
    });
    new import_obsidian.Setting(containerEl).setName("Token (\u4EFB\u610F)").setDesc("\u975E\u516C\u958B\u30EA\u30DD\u30B8\u30C8\u30EA\u306B\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u5834\u5408\u306F Personal Access Token \u3092\u5165\u529B").addText((text) => {
      text.setPlaceholder("ghp_...").setValue(this.plugin.settings.token).onChange(async (value) => {
        this.plugin.settings.token = value.trim();
        await this.plugin.saveSettings();
      }).inputEl.type = "password";
    });
    new import_obsidian.Setting(containerEl).setName("Exclude patterns").setDesc("\u9664\u5916\u3057\u305F\u3044\u30D1\u30B9\u3092\u6539\u884C\u533A\u5207\u308A\u3067\u6307\u5B9A (* \u3068 ** \u304C\u4F7F\u7528\u53EF\u80FD)").addTextArea((area) => {
      area.setPlaceholder("examples/\n**/*.psd").setValue(this.plugin.settings.excludePatterns).onChange(async (value) => {
        this.plugin.settings.excludePatterns = value;
        await this.plugin.saveSettings();
      });
      area.inputEl.rows = 3;
    });
    new import_obsidian.Setting(containerEl).setName("Protect patterns").setDesc("\u30ED\u30FC\u30AB\u30EB\u3092\u4FDD\u8B77\u3057\u305F\u3044\u30D1\u30B9\u3092\u6539\u884C\u533A\u5207\u308A\u3067\u6307\u5B9A (\u4E00\u81F4\u3057\u305F\u30D5\u30A1\u30A4\u30EB\u306F\u4E0A\u66F8\u304D\u3057\u307E\u305B\u3093)").addTextArea((area) => {
      area.setPlaceholder("private/**").setValue(this.plugin.settings.protectPatterns).onChange(async (value) => {
        this.plugin.settings.protectPatterns = value;
        await this.plugin.saveSettings();
      });
      area.inputEl.rows = 3;
    });
    new import_obsidian.Setting(containerEl).setName("Dry-run \u3092\u65E2\u5B9A\u3067\u6709\u52B9\u306B\u3059\u308B").setDesc("\u540C\u671F\u30DC\u30BF\u30F3\u3067\u5E38\u306B\u30C9\u30E9\u30A4\u30E9\u30F3\u3092\u5B9F\u884C\u3057\u3001\u5DEE\u5206\u3060\u3051\u3092\u78BA\u8A8D\u3057\u307E\u3059").addToggle((toggle) => {
      toggle.setValue(this.plugin.settings.dryRunByDefault).onChange(async (value) => {
        this.plugin.settings.dryRunByDefault = value;
        await this.plugin.saveSettings();
      });
    });
    const actionSetting = new import_obsidian.Setting(containerEl).setName("\u30A2\u30AF\u30B7\u30E7\u30F3").setDesc("\u8A2D\u5B9A\u4FDD\u5B58\u5F8C\u306B\u30C6\u30B9\u30C8\u63A5\u7D9A\u3084\u540C\u671F\u3092\u5B9F\u884C\u3067\u304D\u307E\u3059\u3002");
    actionSetting.addButton((button) => {
      button.setButtonText("\u30C6\u30B9\u30C8\u63A5\u7D9A").setCta().onClick(async () => {
        await this.plugin.handleTestConnection(button);
      });
    });
    actionSetting.addButton((button) => {
      button.setButtonText("\u4ECA\u3059\u3050\u540C\u671F").onClick(async () => {
        await this.plugin.handleSync(button);
      });
    });
    new import_obsidian.Setting(containerEl).setName("\u6700\u7D42\u540C\u671F\u7D50\u679C").setDesc("\u76F4\u8FD1\u3067\u5B8C\u4E86\u3057\u305F\u540C\u671F\u306E\u6982\u8981").addText((text) => {
      text.setValue(this.plugin.settings.lastSyncSummary || "\u672A\u5B9F\u884C").setDisabled(true);
    });
  }
};
var GitHubPullPlugin = class extends import_obsidian.Plugin {
  constructor() {
    super(...arguments);
    this.settings = DEFAULT_SETTINGS;
    this.client = new GitHubClient();
    this.syncController = new SyncController(this.app, this.client, () => this.settings);
    this.syncing = false;
  }
  async onload() {
    await this.loadSettings();
    this.addCommand({
      id: "mobile-github-pull-sync",
      name: "Pull from GitHub (read-only)",
      callback: async () => {
        await this.executeSync(this.settings.dryRunByDefault);
      }
    });
    this.addRibbonIcon("download-cloud", "Pull from GitHub (read-only)", async () => {
      await this.executeSync(this.settings.dryRunByDefault);
    });
    this.addSettingTab(new GitHubPullSettingTab(this));
  }
  async loadSettings() {
    const loaded = await this.loadData();
    this.settings = { ...DEFAULT_SETTINGS, ...loaded ?? {} };
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  validateRepository() {
    const repository = this.settings.repository.trim();
    if (!repository) {
      new import_obsidian.Notice("Repository \u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002");
      return false;
    }
    if (!repository.includes("/")) {
      new import_obsidian.Notice("Repository \u306F owner/repo \u306E\u5F62\u5F0F\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002");
      return false;
    }
    return true;
  }
  async handleTestConnection(button) {
    if (this.syncing) {
      new import_obsidian.Notice("\u540C\u671F\u307E\u305F\u306F\u30C6\u30B9\u30C8\u3092\u5B9F\u884C\u4E2D\u3067\u3059\u3002\u3057\u3070\u3089\u304F\u304A\u5F85\u3061\u304F\u3060\u3055\u3044\u3002");
      return;
    }
    if (!this.validateRepository()) {
      return;
    }
    button.setDisabled(true);
    let notice;
    try {
      notice = new import_obsidian.Notice("GitHub \u3078\u63A5\u7D9A\u3092\u78BA\u8A8D\u3057\u3066\u3044\u307E\u3059\u2026", 0);
      const result = await this.client.testConnection({
        repository: this.settings.repository,
        branch: this.settings.branch,
        token: this.settings.token || void 0
      });
      notice.hide();
      if (result.ok) {
        const rate = typeof result.rateLimitRemaining === "number" ? ` (\u6B8B\u308A ${result.rateLimitRemaining} \u30EA\u30AF\u30A8\u30B9\u30C8)` : "";
        new import_obsidian.Notice(`\u30C6\u30B9\u30C8\u63A5\u7D9A\u6210\u529F: ${result.message}${rate}`);
      } else {
        new import_obsidian.Notice(`\u30C6\u30B9\u30C8\u63A5\u7D9A\u5931\u6557: ${result.message}`);
      }
    } catch (error) {
      if (notice) {
        notice.hide();
      }
      const message = error instanceof Error ? error.message : String(error);
      new import_obsidian.Notice(`\u30C6\u30B9\u30C8\u63A5\u7D9A\u4E2D\u306B\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F: ${message}`);
    } finally {
      button.setDisabled(false);
    }
  }
  async handleSync(button) {
    await this.executeSync(this.settings.dryRunByDefault, button);
  }
  async executeSync(dryRun, button) {
    if (this.syncing) {
      new import_obsidian.Notice("\u3059\u3067\u306B\u540C\u671F\u51E6\u7406\u304C\u5B9F\u884C\u4E2D\u3067\u3059\u3002");
      return;
    }
    if (!this.validateRepository()) {
      return;
    }
    this.syncing = true;
    button?.setDisabled(true);
    const progressNotice = new import_obsidian.Notice(dryRun ? "\u30C9\u30E9\u30A4\u30E9\u30F3\u3067\u540C\u671F\u5185\u5BB9\u3092\u78BA\u8A8D\u3057\u307E\u3059\u2026" : "GitHub \u304B\u3089\u540C\u671F\u3092\u958B\u59CB\u3057\u307E\u3059\u2026", 0);
    try {
      const result = await this.syncController.performSync({
        dryRun,
        onProgress: (message) => this.showProgress(message)
      });
      const summary = this.formatSyncResult(result);
      this.settings.lastSyncSummary = summary;
      await this.saveSettings();
      progressNotice.hide();
      new import_obsidian.Notice(summary);
    } catch (error) {
      progressNotice.hide();
      const message = error instanceof Error ? error.message : String(error);
      new import_obsidian.Notice(`\u540C\u671F\u306B\u5931\u6557\u3057\u307E\u3057\u305F: ${message}`);
    } finally {
      this.syncing = false;
      button?.setDisabled(false);
    }
  }
  showProgress(message) {
    new import_obsidian.Notice(message, 4e3);
  }
  formatSyncResult(result) {
    const durationSec = (result.durationMs / 1e3).toFixed(1);
    const mode = result.dryRun ? "\u30C9\u30E9\u30A4\u30E9\u30F3" : "\u540C\u671F";
    return `${mode}\u5B8C\u4E86 (\u4F5C\u6210 ${result.created} / \u66F4\u65B0 ${result.updated} / \u524A\u9664 ${result.deleted} / \u5909\u66F4\u306A\u3057 ${result.unchanged} / \u9664\u5916 ${result.excluded} / \u4FDD\u8B77 ${result.protected}) - ${durationSec} \u79D2`;
  }
};
//# sourceMappingURL=main.js.map
