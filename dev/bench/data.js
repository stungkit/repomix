window.BENCHMARK_DATA = {
  "lastUpdate": 1775496549308,
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
      }
    ]
  }
}