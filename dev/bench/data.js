window.BENCHMARK_DATA = {
  "lastUpdate": 1777591866044,
  "repoUrl": "https://github.com/stungkit/repomix",
  "entries": {
    "Repomix Performance": [
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "distinct": true,
          "id": "406194748f0acee935e832ea0bc9050d73c59af9",
          "message": "fix(ci): Fix git switch after orphan branch creation\n\ngit switch - fails after git switch --orphan because there is no\nprevious branch reference. Save the branch name explicitly instead.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-03-28T02:10:38+09:00",
          "tree_id": "3ebc767a4889903e9d95c98f1d48778691170d87",
          "url": "https://github.com/stungkit/repomix/commit/406194748f0acee935e832ea0bc9050d73c59af9"
        },
        "date": 1774632635007,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1648,
            "range": "±86",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1610ms, Q3: 1696ms\nAll times: 1581, 1586, 1605, 1606, 1607, 1610, 1614, 1623, 1632, 1641, 1648, 1650, 1651, 1663, 1695, 1696, 1715, 1866, 1908, 1996ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 3094,
            "range": "±61",
            "unit": "ms",
            "extra": "Median of 10 runs\nQ1: 3059ms, Q3: 3120ms\nAll times: 3040, 3049, 3059, 3080, 3081, 3094, 3106, 3120, 3134, 3135ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 4360,
            "range": "±693",
            "unit": "ms",
            "extra": "Median of 10 runs\nQ1: 4222ms, Q3: 4915ms\nAll times: 4118, 4195, 4222, 4224, 4238, 4360, 4689, 4915, 4956, 4991ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a49d81aa861407eda9badbb6f52e00df30c29b8e",
          "message": "Merge pull request #1302 from yamadashy/perf/pre-init-metrics-worker-pool\n\nperf(core): Pre-initialize metrics worker pool to overlap tiktoken WASM loading",
          "timestamp": "2026-03-28T13:58:11+09:00",
          "tree_id": "40b6c10cc2ad12217414cec53c6c5482641847d1",
          "url": "https://github.com/stungkit/repomix/commit/a49d81aa861407eda9badbb6f52e00df30c29b8e"
        },
        "date": 1774675785815,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 2417,
            "range": "±257",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2276ms, Q3: 2533ms\nAll times: 2203, 2254, 2258, 2259, 2264, 2276, 2391, 2399, 2409, 2414, 2417, 2432, 2446, 2501, 2530, 2533, 2555, 2630, 2641, 2871ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 3063,
            "range": "±28",
            "unit": "ms",
            "extra": "Median of 10 runs\nQ1: 3047ms, Q3: 3075ms\nAll times: 3019, 3042, 3047, 3049, 3052, 3063, 3068, 3075, 3080, 3164ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 4600,
            "range": "±357",
            "unit": "ms",
            "extra": "Median of 10 runs\nQ1: 4308ms, Q3: 4665ms\nAll times: 3699, 3741, 4308, 4327, 4465, 4600, 4601, 4665, 4688, 4727ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "81fc9ebd9e094c97882a893f766e898c70dc3b2d",
          "message": "Merge pull request #1354 from yamadashy/chore/pr-resolve-outdated-auto-reply\n\nchore(agents): Skip confirmation and auto-reply on pr-resolve-outdated",
          "timestamp": "2026-03-29T23:08:07+09:00",
          "tree_id": "887b25858afed1fd09c61ab878862e899fe6a885",
          "url": "https://github.com/stungkit/repomix/commit/81fc9ebd9e094c97882a893f766e898c70dc3b2d"
        },
        "date": 1774805467205,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1475,
            "range": "±186",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1425ms, Q3: 1611ms\nAll times: 1378, 1392, 1398, 1400, 1410, 1413, 1420, 1425, 1428, 1441, 1444, 1446, 1451, 1455, 1456, 1475, 1489, 1502, 1534, 1551, 1558, 1603, 1611, 1636, 1659, 1677, 1699, 1708, 1736, 2170ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 2704,
            "range": "±40",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2688ms, Q3: 2728ms\nAll times: 2665, 2674, 2676, 2681, 2687, 2688, 2691, 2693, 2701, 2702, 2704, 2704, 2706, 2709, 2721, 2728, 2736, 2742, 2770, 2771ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 3098,
            "range": "±287",
            "unit": "ms",
            "extra": "Median of 19 runs\nQ1: 3038ms, Q3: 3325ms\nAll times: 2997, 2998, 3004, 3009, 3038, 3054, 3058, 3061, 3075, 3098, 3105, 3114, 3206, 3233, 3325, 3341, 3404, 3723, 3941ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c8f24b75550514c8c95d60fd2932a92b142f3bd3",
          "message": "Merge pull request #1359 from yamadashy/perf/overlap-security-processing-metrics\n\nperf(core): Overlap security check, file processing, and metrics with output generation",
          "timestamp": "2026-03-31T23:37:19+09:00",
          "tree_id": "d51c32ae3bb051cbab5da166b1ed2753ca9b7f8c",
          "url": "https://github.com/stungkit/repomix/commit/c8f24b75550514c8c95d60fd2932a92b142f3bd3"
        },
        "date": 1775021389405,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1653,
            "range": "±411",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1406ms, Q3: 1817ms\nAll times: 1283, 1294, 1318, 1354, 1363, 1376, 1406, 1406, 1433, 1456, 1512, 1608, 1611, 1613, 1618, 1653, 1660, 1720, 1742, 1742, 1772, 1776, 1817, 1834, 1835, 1843, 1911, 1950, 2128, 2463ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 2210,
            "range": "±42",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2201ms, Q3: 2243ms\nAll times: 2171, 2176, 2185, 2199, 2199, 2201, 2202, 2203, 2206, 2207, 2210, 2214, 2223, 2225, 2226, 2243, 2251, 2255, 2263, 2264ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 3158,
            "range": "±157",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 3107ms, Q3: 3264ms\nAll times: 3057, 3060, 3076, 3090, 3091, 3107, 3111, 3123, 3129, 3143, 3158, 3165, 3181, 3181, 3197, 3264, 3311, 3344, 3436, 3595ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d6e224a94df25c1bd06b23455296a70561266d8",
          "message": "Merge pull request #1356 from yamadashy/perf/cache-empty-dir-paths\n\nperf(core): Cache empty directory paths to avoid redundant file search",
          "timestamp": "2026-04-02T00:26:39+09:00",
          "tree_id": "9f39d41e3bdcf3870204b7a48ffc12e284484cde",
          "url": "https://github.com/stungkit/repomix/commit/9d6e224a94df25c1bd06b23455296a70561266d8"
        },
        "date": 1775086219345,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1323,
            "range": "±87",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1280ms, Q3: 1367ms\nAll times: 1241, 1252, 1256, 1266, 1275, 1277, 1277, 1280, 1283, 1289, 1290, 1302, 1308, 1313, 1319, 1323, 1333, 1345, 1348, 1355, 1357, 1365, 1367, 1406, 1426, 1474, 1504, 1533, 1566, 1754ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 2245,
            "range": "±93",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2204ms, Q3: 2297ms\nAll times: 2166, 2166, 2171, 2182, 2192, 2204, 2222, 2224, 2240, 2245, 2245, 2251, 2258, 2259, 2266, 2297, 2321, 2348, 2359, 2405ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2727,
            "range": "±38",
            "unit": "ms",
            "extra": "Median of 19 runs\nQ1: 2711ms, Q3: 2749ms\nAll times: 2689, 2694, 2704, 2707, 2711, 2712, 2719, 2724, 2725, 2727, 2727, 2728, 2734, 2744, 2749, 2751, 2759, 2783, 2853ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "03828983d04ccdbaaea75564f1ab01d253938baa",
          "message": "Merge pull request #1372 from yamadashy/perf/eliminate-child-process-in-default-action\n\nperf(cli): Eliminate child process in default action",
          "timestamp": "2026-04-03T13:12:14+09:00",
          "tree_id": "6717846d14036e1d092acd50947ab1721a5bcf47",
          "url": "https://github.com/stungkit/repomix/commit/03828983d04ccdbaaea75564f1ab01d253938baa"
        },
        "date": 1775194126310,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1188,
            "range": "±186",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1133ms, Q3: 1319ms\nAll times: 1105, 1107, 1114, 1117, 1120, 1120, 1129, 1133, 1134, 1135, 1136, 1137, 1138, 1145, 1151, 1188, 1206, 1206, 1210, 1214, 1259, 1293, 1319, 1332, 1353, 1385, 1393, 1416, 1491, 1750ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1993,
            "range": "±15",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1983ms, Q3: 1998ms\nAll times: 1969, 1974, 1974, 1975, 1982, 1983, 1985, 1989, 1992, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1998, 2008, 2021, 2094ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2586,
            "range": "±60",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2570ms, Q3: 2630ms\nAll times: 2551, 2560, 2560, 2561, 2563, 2570, 2571, 2573, 2578, 2582, 2586, 2606, 2610, 2618, 2620, 2630, 2637, 2669, 2684, 2720ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5bd07940f995c100ac0153e5e550f584cc664336",
          "message": "Merge pull request #1385 from yamadashy/renovate/browser-non-major-dependencies\n\nchore(deps): update browser non-major dependencies",
          "timestamp": "2026-04-04T19:57:28+09:00",
          "tree_id": "959038f5f9a7618819ed73ec6a14aef2e31621aa",
          "url": "https://github.com/stungkit/repomix/commit/5bd07940f995c100ac0153e5e550f584cc664336"
        },
        "date": 1775302223316,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1330,
            "range": "±147",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1255ms, Q3: 1402ms\nAll times: 1173, 1203, 1210, 1218, 1235, 1247, 1254, 1255, 1264, 1272, 1276, 1322, 1327, 1330, 1330, 1330, 1334, 1356, 1373, 1381, 1399, 1402, 1402, 1407, 1424, 1452, 1537, 1597, 1672, 1901ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 2015,
            "range": "±52",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2003ms, Q3: 2055ms\nAll times: 1974, 1988, 1996, 1998, 1999, 2003, 2003, 2006, 2010, 2013, 2015, 2018, 2022, 2030, 2045, 2055, 2055, 2067, 2067, 2122ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2504,
            "range": "±44",
            "unit": "ms",
            "extra": "Median of 19 runs\nQ1: 2494ms, Q3: 2538ms\nAll times: 2461, 2467, 2473, 2493, 2494, 2494, 2495, 2497, 2504, 2504, 2505, 2517, 2518, 2526, 2538, 2543, 2543, 2575, 2613ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "208f492ef967a0c683ffe627089c3baf5f279128",
          "message": "Merge pull request #1394 from yamadashy/chore/remove-tower-sponsorship\n\nchore(sponsors): remove Tower sponsorship",
          "timestamp": "2026-04-05T01:09:52+09:00",
          "tree_id": "66c0283cea5cc8168a718a10870c4f3691c2d678",
          "url": "https://github.com/stungkit/repomix/commit/208f492ef967a0c683ffe627089c3baf5f279128"
        },
        "date": 1775345385899,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1238,
            "range": "±43",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1221ms, Q3: 1264ms\nAll times: 1173, 1174, 1189, 1191, 1204, 1215, 1220, 1221, 1221, 1225, 1225, 1226, 1228, 1231, 1234, 1238, 1239, 1245, 1250, 1251, 1259, 1260, 1264, 1283, 1284, 1303, 1307, 1325, 1519, 1554ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 2037,
            "range": "±23",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2026ms, Q3: 2049ms\nAll times: 1989, 2008, 2019, 2021, 2023, 2026, 2028, 2028, 2032, 2033, 2037, 2040, 2046, 2048, 2049, 2049, 2052, 2056, 2058, 2073ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2564,
            "range": "±90",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2519ms, Q3: 2609ms\nAll times: 2474, 2494, 2496, 2501, 2508, 2519, 2521, 2521, 2528, 2557, 2564, 2567, 2599, 2600, 2605, 2609, 2616, 2653, 2920, 3445ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "129cfbe9f587607e143de9f89f73226a5548f364",
          "message": "Merge pull request #1410 from yamadashy/perf/use-brotli-for-cache-compression\n\nperf(server): Switch cache compression from deflate to Brotli",
          "timestamp": "2026-04-06T02:16:48+09:00",
          "tree_id": "09b733d02acec7336e3f13eca2e60fea343ae642",
          "url": "https://github.com/stungkit/repomix/commit/129cfbe9f587607e143de9f89f73226a5548f364"
        },
        "date": 1775453370756,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1163,
            "range": "±50",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1136ms, Q3: 1186ms\nAll times: 1117, 1118, 1123, 1125, 1129, 1131, 1133, 1136, 1139, 1143, 1145, 1148, 1150, 1155, 1156, 1163, 1164, 1170, 1171, 1173, 1175, 1185, 1186, 1186, 1195, 1204, 1257, 1299, 1340, 1363ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 2036,
            "range": "±25",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2026ms, Q3: 2051ms\nAll times: 1988, 2012, 2022, 2022, 2026, 2026, 2027, 2033, 2034, 2036, 2036, 2037, 2038, 2043, 2047, 2051, 2064, 2065, 2068, 2076ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2393,
            "range": "±71",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2353ms, Q3: 2424ms\nAll times: 2314, 2327, 2341, 2349, 2353, 2353, 2375, 2377, 2381, 2391, 2393, 2398, 2399, 2420, 2423, 2424, 2430, 2452, 2481, 2492ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6a645d86637bab9cb670a7a297944039384000f5",
          "message": "Merge pull request #1425 from yamadashy/chore/improve-claude-md\n\nchore(agents): Improve CLAUDE.md clarity and conciseness",
          "timestamp": "2026-04-06T23:24:46+09:00",
          "tree_id": "bc3d4c5050625f199762755f04bc43ac27f3f858",
          "url": "https://github.com/stungkit/repomix/commit/6a645d86637bab9cb670a7a297944039384000f5"
        },
        "date": 1775496548804,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1176,
            "range": "±268",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1130ms, Q3: 1398ms\nAll times: 1102, 1114, 1117, 1124, 1125, 1125, 1129, 1130, 1136, 1142, 1145, 1148, 1150, 1156, 1170, 1176, 1193, 1217, 1260, 1268, 1316, 1318, 1398, 1409, 1436, 1444, 1448, 1478, 1578, 1580ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1918,
            "range": "±72",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1899ms, Q3: 1971ms\nAll times: 1855, 1880, 1888, 1893, 1897, 1899, 1900, 1900, 1909, 1915, 1918, 1919, 1927, 1951, 1954, 1971, 1993, 2052, 2176, 2294ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2496,
            "range": "±313",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2454ms, Q3: 2767ms\nAll times: 2401, 2413, 2424, 2434, 2451, 2454, 2454, 2471, 2474, 2480, 2496, 2500, 2502, 2503, 2547, 2767, 2930, 2975, 2999, 3633ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eafa70a7ca875f6737a86349397d3233c2d9fa13",
          "message": "Merge pull request #1430 from yamadashy/dependabot/npm_and_yarn/npm_and_yarn-8578f1e909\n\nchore(deps): Bump the npm_and_yarn group across 3 directories with 3 updates",
          "timestamp": "2026-04-08T22:37:37+09:00",
          "tree_id": "3d87db94a20a0f2feff45bacc1f036810046d91c",
          "url": "https://github.com/stungkit/repomix/commit/eafa70a7ca875f6737a86349397d3233c2d9fa13"
        },
        "date": 1775734173546,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1231,
            "range": "±142",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1177ms, Q3: 1319ms\nAll times: 1149, 1167, 1168, 1172, 1173, 1173, 1176, 1177, 1184, 1193, 1203, 1206, 1211, 1216, 1230, 1231, 1241, 1246, 1247, 1268, 1297, 1300, 1319, 1343, 1350, 1383, 1388, 1502, 1510, 1565ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1883,
            "range": "±17",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1877ms, Q3: 1894ms\nAll times: 1851, 1861, 1867, 1871, 1876, 1877, 1877, 1880, 1881, 1882, 1883, 1888, 1889, 1891, 1894, 1894, 1895, 1914, 1926, 1928ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2536,
            "range": "±224",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2475ms, Q3: 2699ms\nAll times: 2365, 2407, 2435, 2439, 2449, 2475, 2482, 2484, 2487, 2518, 2536, 2553, 2584, 2657, 2666, 2699, 2700, 2743, 3056, 3283ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c05836ac8442587ce16dd21a5dd15d4848277052",
          "message": "Merge pull request #1455 from yamadashy/fix/codecov-badge-token\n\ndocs(readme): Fix Codecov badge token",
          "timestamp": "2026-04-11T19:46:51+09:00",
          "tree_id": "aa9e743ad7e9c905a1d1981714aeb535d54893e6",
          "url": "https://github.com/stungkit/repomix/commit/c05836ac8442587ce16dd21a5dd15d4848277052"
        },
        "date": 1775906909737,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1373,
            "range": "±201",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1239ms, Q3: 1440ms\nAll times: 1159, 1183, 1190, 1202, 1220, 1220, 1229, 1239, 1246, 1255, 1255, 1280, 1292, 1326, 1351, 1373, 1386, 1392, 1403, 1417, 1428, 1439, 1440, 1441, 1455, 1459, 1496, 1598, 1646, 1989ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1771,
            "range": "±26",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1761ms, Q3: 1787ms\nAll times: 1713, 1729, 1744, 1750, 1755, 1761, 1762, 1769, 1770, 1770, 1771, 1776, 1779, 1779, 1780, 1787, 1791, 1995, 2045, 2188ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2147,
            "range": "±43",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2127ms, Q3: 2170ms\nAll times: 2109, 2120, 2120, 2126, 2127, 2127, 2130, 2133, 2137, 2137, 2147, 2151, 2153, 2153, 2170, 2170, 2181, 2181, 2192, 2197ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4c356f73251746c2cc3edcc68dbe19204aa1e950",
          "message": "Merge pull request #1457 from yamadashy/perf/fast-output-tokenization\n\nperf(core): Skip redundant full-output tokenization via wrapper-extraction fast path (-13.2%)",
          "timestamp": "2026-04-13T00:20:10+09:00",
          "tree_id": "905174e4806045dbff1efb20decd1259331b2189",
          "url": "https://github.com/stungkit/repomix/commit/4c356f73251746c2cc3edcc68dbe19204aa1e950"
        },
        "date": 1776101449953,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1209,
            "range": "±204",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1101ms, Q3: 1305ms\nAll times: 967, 1015, 1068, 1093, 1096, 1096, 1100, 1101, 1109, 1118, 1129, 1168, 1177, 1178, 1181, 1209, 1220, 1232, 1249, 1269, 1272, 1287, 1305, 1318, 1327, 1353, 1381, 1418, 1466, 1482ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1436,
            "range": "±18",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1423ms, Q3: 1441ms\nAll times: 1393, 1415, 1417, 1418, 1420, 1423, 1423, 1426, 1433, 1433, 1436, 1436, 1437, 1438, 1439, 1441, 1443, 1457, 1462, 1467ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2176,
            "range": "±236",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2119ms, Q3: 2355ms\nAll times: 2051, 2064, 2081, 2085, 2092, 2119, 2121, 2134, 2150, 2170, 2176, 2205, 2265, 2295, 2300, 2355, 2359, 2588, 2645, 3238ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1c01d6951c6494ef226637bb83d5c70cd7e0716f",
          "message": "Merge pull request #1467 from yamadashy/perf/prefetch-sort-data\n\nperf(core): Prefetch git sort data to overlap with file search and collection",
          "timestamp": "2026-04-15T00:41:41+09:00",
          "tree_id": "cba49da97f353c479f12fcb5d8418cbefe43c759",
          "url": "https://github.com/stungkit/repomix/commit/1c01d6951c6494ef226637bb83d5c70cd7e0716f"
        },
        "date": 1776187903808,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 5027,
            "range": "±872",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 4595ms, Q3: 5467ms\nAll times: 3192, 4154, 4260, 4451, 4456, 4511, 4578, 4595, 4686, 4710, 4775, 4807, 4837, 4946, 5014, 5027, 5104, 5112, 5149, 5199, 5281, 5313, 5467, 5481, 5584, 5615, 5756, 6134, 6906, 7754ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1541,
            "range": "±29",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1529ms, Q3: 1558ms\nAll times: 1512, 1515, 1527, 1527, 1528, 1529, 1530, 1533, 1534, 1537, 1541, 1549, 1551, 1554, 1558, 1558, 1561, 1567, 1582, 1584ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1943,
            "range": "±30",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1928ms, Q3: 1958ms\nAll times: 1916, 1917, 1917, 1920, 1927, 1928, 1929, 1931, 1932, 1938, 1943, 1946, 1947, 1950, 1957, 1958, 1961, 1974, 1978, 1984ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c55528df3718b5adb0952da0a72efcb7772cc482",
          "message": "Merge pull request #1469 from yamadashy/perf/reduce-module-overhead\n\nperf(core): Remove redundant minimatch and parallelize wrapper tokenization",
          "timestamp": "2026-04-15T22:24:43+09:00",
          "tree_id": "435703feb2ba6845db791f74a54749dcaf047bb4",
          "url": "https://github.com/stungkit/repomix/commit/c55528df3718b5adb0952da0a72efcb7772cc482"
        },
        "date": 1776295726090,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 909,
            "range": "±41",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 884ms, Q3: 925ms\nAll times: 858, 862, 863, 868, 874, 876, 880, 884, 887, 895, 896, 900, 900, 901, 903, 909, 911, 912, 916, 918, 919, 921, 925, 937, 978, 1016, 1016, 1036, 1082, 1138ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1132,
            "range": "±17",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1124ms, Q3: 1141ms\nAll times: 1114, 1118, 1119, 1119, 1121, 1124, 1125, 1125, 1126, 1128, 1132, 1133, 1133, 1136, 1140, 1141, 1145, 1149, 1153, 1160ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1907,
            "range": "±25",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1894ms, Q3: 1919ms\nAll times: 1863, 1885, 1886, 1889, 1890, 1894, 1898, 1898, 1902, 1903, 1907, 1907, 1907, 1911, 1913, 1919, 1921, 1930, 1933, 1955ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b8ef0ec8336415f77a9d181f36f90e5a237111a2",
          "message": "Merge pull request #1491 from yamadashy/renovate/major-scripts-major-dependencies\n\nchore(deps): update dependency typescript to v6",
          "timestamp": "2026-04-18T15:22:05+09:00",
          "tree_id": "b0c40b91473f246d5d6cb147195a5625c80f8952",
          "url": "https://github.com/stungkit/repomix/commit/b8ef0ec8336415f77a9d181f36f90e5a237111a2"
        },
        "date": 1776511833007,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1482,
            "range": "±211",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1357ms, Q3: 1568ms\nAll times: 1029, 1043, 1074, 1173, 1195, 1217, 1222, 1357, 1372, 1380, 1391, 1407, 1413, 1414, 1470, 1482, 1489, 1490, 1496, 1525, 1536, 1544, 1568, 1574, 1588, 1595, 1653, 1667, 1717, 2021ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1521,
            "range": "±43",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1498ms, Q3: 1541ms\nAll times: 1489, 1490, 1494, 1496, 1498, 1498, 1500, 1506, 1510, 1515, 1521, 1522, 1529, 1539, 1539, 1541, 1544, 1545, 1548, 1550ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1490,
            "range": "±31",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1475ms, Q3: 1506ms\nAll times: 1467, 1468, 1470, 1473, 1475, 1475, 1479, 1483, 1483, 1488, 1490, 1491, 1492, 1499, 1503, 1506, 1508, 1508, 1509, 1513ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9f6d0b5bdba0d8bea746d065cb28cff2b444b1ce",
          "message": "Merge pull request #1489 from yamadashy/perf/try-valibot\n\nperf(config): Migrate configSchema from zod to valibot (experimental)",
          "timestamp": "2026-04-19T10:39:01+09:00",
          "tree_id": "3bc3369dd07cdd1654ae8481861ab5069086eb5a",
          "url": "https://github.com/stungkit/repomix/commit/9f6d0b5bdba0d8bea746d065cb28cff2b444b1ce"
        },
        "date": 1776576612581,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 883,
            "range": "±26",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 871ms, Q3: 897ms\nAll times: 850, 853, 855, 861, 864, 870, 870, 871, 874, 874, 878, 879, 880, 882, 883, 883, 883, 886, 889, 889, 889, 894, 897, 899, 905, 915, 921, 984, 999, 1012ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1531,
            "range": "±45",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1517ms, Q3: 1562ms\nAll times: 1498, 1502, 1506, 1515, 1517, 1517, 1521, 1525, 1528, 1530, 1531, 1539, 1542, 1545, 1555, 1562, 1574, 1591, 1621, 1804ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1887,
            "range": "±23",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1875ms, Q3: 1898ms\nAll times: 1844, 1855, 1861, 1868, 1872, 1875, 1876, 1876, 1876, 1879, 1887, 1888, 1888, 1891, 1896, 1898, 1900, 1901, 1903, 1914ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6dc0b0d446074771f9a1f1f7e2cffbac470dc137",
          "message": "Merge pull request #1497 from yamadashy/refactor/website-server-valibot\n\nrefactor(server): Migrate request validation from zod to valibot",
          "timestamp": "2026-04-19T22:46:59+09:00",
          "tree_id": "189208a3ecb34e596c518fe9bedd60c7d1f9305c",
          "url": "https://github.com/stungkit/repomix/commit/6dc0b0d446074771f9a1f1f7e2cffbac470dc137"
        },
        "date": 1776619738445,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1723,
            "range": "±415",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1486ms, Q3: 1901ms\nAll times: 1366, 1387, 1411, 1415, 1445, 1452, 1458, 1486, 1496, 1506, 1654, 1672, 1672, 1695, 1698, 1723, 1754, 1768, 1796, 1806, 1859, 1888, 1901, 1908, 1952, 1960, 1970, 2097, 2160, 2648ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1536,
            "range": "±56",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1503ms, Q3: 1559ms\nAll times: 1476, 1482, 1484, 1490, 1496, 1503, 1503, 1521, 1526, 1530, 1536, 1536, 1547, 1548, 1552, 1559, 1564, 1567, 1574, 1579ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2090,
            "range": "±597",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 2003ms, Q3: 2600ms\nAll times: 1950, 1979, 1987, 1988, 1989, 2003, 2019, 2022, 2052, 2057, 2090, 2123, 2160, 2413, 2594, 2600, 2613, 2647, 2652, 3659ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "99ea7d2de7a5730498cac249c70f520e485cd92a",
          "message": "Merge pull request #1505 from yamadashy/chore/temp-disable-website-auto-pack\n\nchore(website): Temporarily disable auto-pack on repo query param",
          "timestamp": "2026-04-24T00:44:21+09:00",
          "tree_id": "87a8740ca2718ea06aada55e42ae49584c201325",
          "url": "https://github.com/stungkit/repomix/commit/99ea7d2de7a5730498cac249c70f520e485cd92a"
        },
        "date": 1776986975325,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1617,
            "range": "±259",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1513ms, Q3: 1772ms\nAll times: 1169, 1394, 1431, 1462, 1466, 1487, 1498, 1513, 1526, 1531, 1543, 1557, 1563, 1595, 1610, 1617, 1627, 1646, 1676, 1677, 1687, 1691, 1772, 1891, 1899, 1908, 1927, 2002, 2037, 2369ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1539,
            "range": "±44",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1528ms, Q3: 1572ms\nAll times: 1499, 1514, 1520, 1521, 1524, 1528, 1529, 1531, 1532, 1532, 1539, 1554, 1559, 1563, 1565, 1572, 1573, 1592, 1595, 1713ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2074,
            "range": "±137",
            "unit": "ms",
            "extra": "Median of 18 runs\nQ1: 2017ms, Q3: 2154ms\nAll times: 1991, 1996, 2001, 2016, 2017, 2019, 2050, 2061, 2072, 2074, 2077, 2084, 2148, 2154, 2156, 2185, 2359, 2531ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "28b57679262ee6816d8f937dc87e70369e84ff44",
          "message": "Merge pull request #1516 from yamadashy/claude/sleepy-tesla-vUjfm\n\nperf(core): Automated performance tuning by Claude",
          "timestamp": "2026-04-26T18:41:58+09:00",
          "tree_id": "72fabf0e3792edffa560070757abd7c5378e9340",
          "url": "https://github.com/stungkit/repomix/commit/28b57679262ee6816d8f937dc87e70369e84ff44"
        },
        "date": 1777202992627,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 793,
            "range": "±69",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 777ms, Q3: 846ms\nAll times: 754, 756, 760, 769, 773, 775, 776, 777, 781, 782, 786, 788, 790, 790, 792, 793, 794, 794, 808, 810, 819, 827, 846, 846, 855, 858, 865, 911, 959, 988ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1390,
            "range": "±29",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1387ms, Q3: 1416ms\nAll times: 1345, 1362, 1377, 1377, 1384, 1387, 1387, 1389, 1389, 1390, 1390, 1401, 1403, 1408, 1412, 1416, 1425, 1425, 1445, 1450ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1737,
            "range": "±35",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1723ms, Q3: 1758ms\nAll times: 1703, 1710, 1717, 1718, 1720, 1723, 1724, 1724, 1731, 1734, 1737, 1739, 1740, 1746, 1750, 1758, 1758, 1779, 1781, 1788ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "distinct": true,
          "id": "7dfd2b96657cc88ff60b8ec1fd88b467aa1f8aba",
          "message": "1.14.0",
          "timestamp": "2026-04-26T23:04:36+09:00",
          "tree_id": "32caaa33ce128e019313d6503d78fe49367f33c5",
          "url": "https://github.com/stungkit/repomix/commit/7dfd2b96657cc88ff60b8ec1fd88b467aa1f8aba"
        },
        "date": 1777246124814,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 854,
            "range": "±75",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 830ms, Q3: 905ms\nAll times: 790, 790, 805, 811, 811, 813, 821, 830, 832, 835, 839, 846, 851, 853, 853, 854, 865, 873, 880, 890, 892, 896, 905, 909, 921, 937, 948, 949, 973, 1053ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1058,
            "range": "±19",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1049ms, Q3: 1068ms\nAll times: 1040, 1040, 1044, 1045, 1045, 1049, 1051, 1054, 1055, 1057, 1058, 1059, 1060, 1061, 1064, 1068, 1075, 1077, 1084, 1085ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1833,
            "range": "±35",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1808ms, Q3: 1843ms\nAll times: 1779, 1785, 1797, 1804, 1806, 1808, 1809, 1811, 1813, 1830, 1833, 1835, 1835, 1836, 1840, 1843, 1852, 1857, 1866, 1920ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "758ab51bac0bbca668e073982f3eef423173a8f0",
          "message": "Merge pull request #1521 from yamadashy/claude/sleepy-tesla-LdYQq\n\nperf(core): Automated performance tuning by Claude",
          "timestamp": "2026-04-30T00:46:07+09:00",
          "tree_id": "5a02c96a3f72c02f459aaf39b1f5b2e46979fb50",
          "url": "https://github.com/stungkit/repomix/commit/758ab51bac0bbca668e073982f3eef423173a8f0"
        },
        "date": 1777483888928,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1629,
            "range": "±278",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1497ms, Q3: 1775ms\nAll times: 1365, 1377, 1395, 1402, 1433, 1473, 1479, 1497, 1505, 1519, 1539, 1554, 1564, 1575, 1609, 1629, 1633, 1634, 1635, 1671, 1681, 1745, 1775, 1787, 1847, 1914, 1940, 2022, 2061, 2251ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1361,
            "range": "±25",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1352ms, Q3: 1377ms\nAll times: 1329, 1341, 1341, 1342, 1343, 1352, 1352, 1353, 1355, 1359, 1361, 1368, 1371, 1371, 1374, 1377, 1377, 1379, 1386, 1453ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1688,
            "range": "±52",
            "unit": "ms",
            "extra": "Median of 18 runs\nQ1: 1659ms, Q3: 1711ms\nAll times: 1646, 1647, 1657, 1657, 1659, 1666, 1669, 1680, 1682, 1688, 1691, 1698, 1702, 1711, 1712, 1717, 1718, 1728ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "253b95fba5a7117ebfbee5147a4861746459aad6",
          "message": "Merge pull request #1525 from yamadashy/feat/nix-flake-devshell\n\nfeat(nix): Add Nix flake with development shell",
          "timestamp": "2026-05-01T00:41:32+09:00",
          "tree_id": "d94fd2a6bab89f43b201cc6132c3dc7ddf64894c",
          "url": "https://github.com/stungkit/repomix/commit/253b95fba5a7117ebfbee5147a4861746459aad6"
        },
        "date": 1777591865404,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1683,
            "range": "±301",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1598ms, Q3: 1899ms\nAll times: 1295, 1336, 1427, 1433, 1492, 1498, 1561, 1598, 1620, 1627, 1634, 1637, 1645, 1667, 1678, 1683, 1683, 1697, 1702, 1738, 1806, 1816, 1899, 1923, 1937, 1993, 2044, 2184, 2323, 2452ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1353,
            "range": "±17",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1343ms, Q3: 1360ms\nAll times: 1333, 1335, 1338, 1338, 1342, 1343, 1347, 1349, 1352, 1353, 1353, 1354, 1354, 1359, 1359, 1360, 1361, 1366, 1386, 1418ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1737,
            "range": "±30",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1727ms, Q3: 1757ms\nAll times: 1710, 1717, 1719, 1720, 1726, 1727, 1729, 1729, 1731, 1736, 1737, 1741, 1745, 1749, 1756, 1757, 1758, 1763, 1781, 1799ms"
          }
        ]
      }
    ]
  }
}