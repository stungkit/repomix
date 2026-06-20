window.BENCHMARK_DATA = {
  "lastUpdate": 1781954912383,
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
          "id": "3d606eabb8cce38953cc3c7a0ab6705bbb841b33",
          "message": "Merge pull request #1532 from yamadashy/renovate/browser-non-major-dependencies\n\nchore(deps): update browser non-major dependencies",
          "timestamp": "2026-05-02T11:05:59+09:00",
          "tree_id": "cec232e9ea931e5c5d231658a2539748d1da30ed",
          "url": "https://github.com/stungkit/repomix/commit/3d606eabb8cce38953cc3c7a0ab6705bbb841b33"
        },
        "date": 1777699815562,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1258,
            "range": "±162",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1174ms, Q3: 1336ms\nAll times: 980, 1040, 1092, 1116, 1119, 1150, 1153, 1174, 1186, 1204, 1207, 1218, 1229, 1244, 1252, 1258, 1260, 1261, 1290, 1298, 1305, 1335, 1336, 1363, 1383, 1416, 1505, 1547, 1803, 1975ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1319,
            "range": "±27",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1303ms, Q3: 1330ms\nAll times: 1293, 1297, 1299, 1300, 1300, 1303, 1306, 1308, 1309, 1318, 1319, 1320, 1321, 1323, 1329, 1330, 1340, 1351, 1359, 1366ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1727,
            "range": "±34",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1710ms, Q3: 1744ms\nAll times: 1661, 1672, 1689, 1703, 1707, 1710, 1718, 1718, 1719, 1724, 1727, 1727, 1736, 1740, 1744, 1744, 1746, 1749, 1754, 1762ms"
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
          "id": "afd329561fd889265f173fad40cb4a9e149bbe34",
          "message": "Merge pull request #1536 from yamadashy/chore/mark-skills-internal\n\nchore(skills): Mark agent-memory and contextual-commit as internal",
          "timestamp": "2026-05-03T15:43:06+09:00",
          "tree_id": "2d496ca7038384c8fa998775d3e2ceb6b01c0338",
          "url": "https://github.com/stungkit/repomix/commit/afd329561fd889265f173fad40cb4a9e149bbe34"
        },
        "date": 1777807765540,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 2076,
            "range": "±156",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 2002ms, Q3: 2158ms\nAll times: 1938, 1950, 1958, 1962, 1978, 1996, 1999, 2002, 2016, 2019, 2023, 2030, 2037, 2054, 2066, 2076, 2104, 2109, 2111, 2113, 2126, 2153, 2158, 2168, 2181, 2198, 2228, 2255, 2273, 2346ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 4392,
            "range": "±360",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 4063ms, Q3: 4423ms\nAll times: 4015, 4021, 4025, 4034, 4045, 4063, 4073, 4094, 4373, 4377, 4392, 4393, 4395, 4406, 4418, 4423, 4429, 4439, 4479, 4488ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1795,
            "range": "±21",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1787ms, Q3: 1808ms\nAll times: 1759, 1765, 1773, 1781, 1785, 1787, 1789, 1791, 1791, 1791, 1795, 1797, 1801, 1802, 1803, 1808, 1813, 1818, 1836, 1857ms"
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
          "id": "55f43dedfdffe27a205fea4d46c72042ba6aacb2",
          "message": "Merge pull request #1534 from yamadashy/renovate/scripts-non-major-dependencies\n\nchore(deps): update dependency typescript to ^6.0.3",
          "timestamp": "2026-05-06T00:48:26+09:00",
          "tree_id": "b25fd0248c063a34531eb527e54ded121bab5208",
          "url": "https://github.com/stungkit/repomix/commit/55f43dedfdffe27a205fea4d46c72042ba6aacb2"
        },
        "date": 1778002161951,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1217,
            "range": "±244",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1110ms, Q3: 1354ms\nAll times: 954, 975, 980, 1005, 1009, 1054, 1094, 1110, 1114, 1117, 1144, 1147, 1161, 1189, 1192, 1217, 1226, 1234, 1245, 1249, 1260, 1263, 1354, 1356, 1428, 1480, 1548, 1551, 1587, 1758ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1366,
            "range": "±38",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1347ms, Q3: 1385ms\nAll times: 1311, 1325, 1327, 1328, 1332, 1347, 1353, 1357, 1360, 1361, 1366, 1366, 1372, 1374, 1377, 1385, 1388, 1403, 1424, 1452ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1819,
            "range": "±26",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1805ms, Q3: 1831ms\nAll times: 1778, 1781, 1794, 1801, 1803, 1805, 1807, 1808, 1810, 1813, 1819, 1819, 1827, 1829, 1829, 1831, 1843, 1846, 1846, 1849ms"
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
          "id": "b99706131b26b68e0d72aab7f93fccebad1460c0",
          "message": "Merge pull request #1515 from yamadashy/feat/dart-extra-definitions\n\nfeat(core): Capture mixin, typedef, getter, setter, and factory in Dart query",
          "timestamp": "2026-05-06T22:28:35+09:00",
          "tree_id": "01b750aa212658cce3cbc004558584657d90cd08",
          "url": "https://github.com/stungkit/repomix/commit/b99706131b26b68e0d72aab7f93fccebad1460c0"
        },
        "date": 1778153396351,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1377,
            "range": "±203",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1266ms, Q3: 1469ms\nAll times: 1130, 1140, 1172, 1195, 1205, 1246, 1250, 1266, 1278, 1280, 1302, 1314, 1318, 1346, 1372, 1377, 1396, 1407, 1407, 1411, 1416, 1468, 1469, 1690, 1699, 1774, 1856, 1942, 1942, 2272ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1405,
            "range": "±46",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1383ms, Q3: 1429ms\nAll times: 1364, 1365, 1370, 1371, 1373, 1383, 1389, 1390, 1397, 1404, 1405, 1412, 1414, 1424, 1426, 1429, 1445, 1445, 1462, 1489ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1693,
            "range": "±26",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1681ms, Q3: 1707ms\nAll times: 1668, 1673, 1674, 1676, 1679, 1681, 1683, 1683, 1684, 1686, 1693, 1696, 1701, 1703, 1704, 1707, 1709, 1711, 1724, 1728ms"
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
          "id": "daa7ff3e2b5dc92c5e52781982689ad73f1e8d36",
          "message": "Merge pull request #1558 from yamadashy/chore/renovate-group-github-actions\n\nchore(renovate): Group GitHub Actions, Dockerfile, and Nix updates",
          "timestamp": "2026-05-10T01:02:30+09:00",
          "tree_id": "0500dfca24e09dcac988d9f24bcb2dbf49f1c6e4",
          "url": "https://github.com/stungkit/repomix/commit/daa7ff3e2b5dc92c5e52781982689ad73f1e8d36"
        },
        "date": 1778369386901,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1001,
            "range": "±116",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 943ms, Q3: 1059ms\nAll times: 850, 877, 905, 910, 920, 939, 941, 943, 948, 948, 950, 955, 982, 992, 994, 1001, 1007, 1010, 1013, 1023, 1049, 1059, 1059, 1090, 1091, 1132, 1222, 1224, 1240, 1420ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1084,
            "range": "±39",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1071ms, Q3: 1110ms\nAll times: 1057, 1064, 1070, 1071, 1071, 1071, 1079, 1081, 1082, 1082, 1084, 1093, 1097, 1100, 1102, 1110, 1110, 1114, 1120, 1171ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1748,
            "range": "±20",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1733ms, Q3: 1753ms\nAll times: 1709, 1718, 1720, 1727, 1729, 1733, 1738, 1742, 1743, 1747, 1748, 1749, 1750, 1750, 1752, 1753, 1758, 1771, 1776, 1796ms"
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
          "id": "fd82811b4e6b952259a784250a936a8f5060ce6d",
          "message": "Merge pull request #1561 from yamadashy/dependabot/npm_and_yarn/npm_and_yarn-f124fd438d\n\nchore(deps): Bump the npm_and_yarn group across 3 directories with 3 updates",
          "timestamp": "2026-05-10T15:02:24+09:00",
          "tree_id": "4ed88fcac5774f916ff2b7806f9f7427dcbb5758",
          "url": "https://github.com/stungkit/repomix/commit/fd82811b4e6b952259a784250a936a8f5060ce6d"
        },
        "date": 1778412623301,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1001,
            "range": "±212",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 955ms, Q3: 1167ms\nAll times: 892, 898, 913, 917, 928, 951, 951, 955, 961, 968, 972, 978, 980, 982, 983, 1001, 1015, 1037, 1060, 1068, 1083, 1154, 1167, 1184, 1187, 1274, 1274, 1379, 1412, 1414ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1431,
            "range": "±28",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1411ms, Q3: 1439ms\nAll times: 1393, 1398, 1405, 1409, 1410, 1411, 1415, 1415, 1427, 1427, 1431, 1436, 1437, 1438, 1439, 1439, 1446, 1462, 1465, 1466ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1894,
            "range": "±162",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1844ms, Q3: 2006ms\nAll times: 1777, 1805, 1823, 1826, 1833, 1844, 1859, 1861, 1862, 1894, 1894, 1898, 1910, 1911, 1955, 2006, 2062, 2165, 2167, 2191ms"
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
          "id": "e27d8be1c4cb8cab511070724cb7f030a84e1fe2",
          "message": "Merge pull request #1565 from yamadashy/chore/remove-agent-memory-skill\n\nchore(skills): Remove agent-memory skill in favor of agent-carnet",
          "timestamp": "2026-05-10T23:13:25+09:00",
          "tree_id": "3127d54a54fa0cc20c2cb0cea6dcef6c29f97d4d",
          "url": "https://github.com/stungkit/repomix/commit/e27d8be1c4cb8cab511070724cb7f030a84e1fe2"
        },
        "date": 1778434132890,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1361,
            "range": "±114",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 1297ms, Q3: 1411ms\nAll times: 1222, 1223, 1232, 1244, 1244, 1269, 1291, 1297, 1321, 1327, 1337, 1342, 1345, 1357, 1357, 1361, 1376, 1379, 1391, 1393, 1397, 1409, 1411, 1576, 1582, 1598, 1620, 1657, 1713, 2092ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1424,
            "range": "±32",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1403ms, Q3: 1435ms\nAll times: 1387, 1400, 1401, 1401, 1401, 1403, 1407, 1410, 1414, 1417, 1424, 1425, 1429, 1429, 1433, 1435, 1457, 1461, 1462, 1479ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1799,
            "range": "±168",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1771ms, Q3: 1939ms\nAll times: 1755, 1757, 1760, 1768, 1770, 1771, 1773, 1780, 1787, 1796, 1799, 1814, 1822, 1841, 1848, 1939, 2125, 2296, 2579, 3082ms"
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
          "id": "dc14555d7f4e24c920b1df3a456a8e9f5d607320",
          "message": "Merge pull request #1575 from yamadashy/test/auto-perf-regression-guard\n\ntest(core): Add regression-guard specs against auto-perf-tuning silent breakages",
          "timestamp": "2026-05-16T18:14:13+09:00",
          "tree_id": "09d215cfa38e00f25452cad23e714a3a6a71ef5d",
          "url": "https://github.com/stungkit/repomix/commit/dc14555d7f4e24c920b1df3a456a8e9f5d607320"
        },
        "date": 1779017359072,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 549,
            "range": "±28",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 536ms, Q3: 564ms\nAll times: 524, 528, 528, 533, 533, 534, 535, 536, 536, 541, 544, 547, 548, 548, 548, 549, 550, 555, 555, 559, 560, 564, 564, 564, 566, 568, 569, 589, 612, 804ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 966,
            "range": "±40",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 947ms, Q3: 987ms\nAll times: 928, 934, 935, 940, 940, 947, 949, 957, 957, 961, 966, 967, 970, 977, 986, 987, 991, 991, 1000, 1020ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1257,
            "range": "±34",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1239ms, Q3: 1273ms\nAll times: 1217, 1218, 1228, 1230, 1235, 1239, 1240, 1246, 1248, 1250, 1257, 1260, 1261, 1261, 1266, 1273, 1285, 1317, 1506, 1736ms"
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
          "id": "5f704397bd5aefb5a6482144285136a9b186bb3d",
          "message": "Merge pull request #1588 from yamadashy/a11y/tabs-and-file-upload\n\nfix(website): Improve accessibility of tabs and file upload widgets",
          "timestamp": "2026-05-22T00:25:43+09:00",
          "tree_id": "546861c642c4b824ae7cd45fa1b806ecbe62a351",
          "url": "https://github.com/stungkit/repomix/commit/5f704397bd5aefb5a6482144285136a9b186bb3d"
        },
        "date": 1779449404620,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 508,
            "range": "±55",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 484ms, Q3: 539ms\nAll times: 467, 472, 472, 475, 478, 479, 483, 484, 486, 488, 489, 494, 499, 501, 505, 508, 510, 526, 528, 531, 533, 534, 539, 542, 556, 576, 586, 594, 616, 620ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 788,
            "range": "±30",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 772ms, Q3: 802ms\nAll times: 747, 757, 758, 760, 766, 772, 775, 784, 785, 788, 788, 790, 790, 792, 798, 802, 803, 806, 830, 836ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1116,
            "range": "±50",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1108ms, Q3: 1158ms\nAll times: 1096, 1101, 1101, 1102, 1104, 1108, 1109, 1114, 1115, 1115, 1116, 1116, 1124, 1136, 1142, 1158, 1182, 1190, 1214, 1357ms"
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
          "id": "132f1b87d25f43d277a2cfd178f221a1f6190be2",
          "message": "Merge pull request #1598 from yamadashy/fix/issue-triage-prompt-injection\n\nchore(ci): harden issue triage workflow with least-privilege split",
          "timestamp": "2026-05-24T22:59:55+09:00",
          "tree_id": "adeca105d532dbb3b400a85779e37cc3bb102bec",
          "url": "https://github.com/stungkit/repomix/commit/132f1b87d25f43d277a2cfd178f221a1f6190be2"
        },
        "date": 1779708539563,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 447,
            "range": "±46",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 436ms, Q3: 482ms\nAll times: 408, 409, 423, 430, 432, 433, 435, 436, 436, 437, 437, 438, 439, 440, 443, 447, 447, 451, 453, 465, 466, 481, 482, 487, 510, 528, 529, 539, 575, 620ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 738,
            "range": "±18",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 731ms, Q3: 749ms\nAll times: 712, 715, 725, 727, 730, 731, 734, 736, 736, 738, 738, 738, 739, 739, 748, 749, 751, 754, 756, 762ms"
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
          "id": "094a635b030e556f69afd74432f7892dbba3824c",
          "message": "Merge pull request #1601 from yamadashy/chore/explorer-description\n\nchore(skills): Sharpen repomix-explorer description",
          "timestamp": "2026-05-26T00:30:55+09:00",
          "tree_id": "e82b0c850042b780859aa9443932a14fa2b43ddf",
          "url": "https://github.com/stungkit/repomix/commit/094a635b030e556f69afd74432f7892dbba3824c"
        },
        "date": 1779773323470,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 439,
            "range": "±19",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 436ms, Q3: 455ms\nAll times: 429, 430, 432, 433, 433, 434, 436, 436, 437, 438, 438, 438, 438, 439, 439, 439, 443, 447, 449, 453, 454, 455, 455, 456, 458, 459, 460, 462, 469, 472ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 763,
            "range": "±46",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 750ms, Q3: 796ms\nAll times: 736, 741, 745, 748, 748, 750, 759, 761, 761, 762, 763, 764, 775, 788, 788, 796, 799, 800, 808, 817ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1227,
            "range": "±35",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1200ms, Q3: 1235ms\nAll times: 1064, 1085, 1092, 1187, 1188, 1200, 1205, 1209, 1214, 1227, 1227, 1229, 1229, 1231, 1234, 1235, 1241, 1245, 1247, 1263ms"
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
          "id": "6d7800eada2e5a2e4d2ef24dc4c09a18348c5769",
          "message": "docs(release): Add v1.14.1 release notes\n\nintent(release): document the 1.14.1 security patch (GHSA-9mm9 argument injection, GHSA-hwpp MCP secret-scan bypass) alongside the token-count cache and Dart parsing improvements\ndecision(release-notes): lead with Security since updating is recommended for all users; omit website/deps/internal PRs per release-note guidelines\ndecision(nix): list nixpkgs install under Improvements (user-facing) and the dev flake under Development (contributor-facing), without pinning a nixpkgs version since it lags releases\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-05-28T00:29:38+09:00",
          "tree_id": "a29a1cde6027fe0bfe9f55b6215b4772f3a39c4b",
          "url": "https://github.com/stungkit/repomix/commit/6d7800eada2e5a2e4d2ef24dc4c09a18348c5769"
        },
        "date": 1779902958809,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 622,
            "range": "±131",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 559ms, Q3: 690ms\nAll times: 494, 495, 503, 507, 516, 551, 556, 559, 562, 564, 568, 568, 584, 610, 620, 622, 633, 657, 663, 666, 668, 672, 690, 702, 748, 750, 795, 821, 826, 867ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 697,
            "range": "±18",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 687ms, Q3: 705ms\nAll times: 665, 675, 677, 682, 684, 687, 689, 689, 694, 695, 697, 699, 703, 703, 703, 705, 705, 706, 707, 719ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 823,
            "range": "±16",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 815ms, Q3: 831ms\nAll times: 804, 811, 812, 814, 815, 815, 816, 818, 819, 823, 823, 825, 826, 827, 829, 831, 837, 840, 842, 853ms"
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
          "id": "c4eac374c285efab96cfa89de31f1335ce7b1983",
          "message": "Merge pull request #1613 from yamadashy/renovate/root-non-major-dependencies\n\nchore(deps): update dependency @typescript/native-preview to ^7.0.0-dev.20260523.1",
          "timestamp": "2026-05-30T18:28:44+09:00",
          "tree_id": "b1d6282aab3efc630ecb3ac4d250788aa2957021",
          "url": "https://github.com/stungkit/repomix/commit/c4eac374c285efab96cfa89de31f1335ce7b1983"
        },
        "date": 1780226975763,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 742,
            "range": "±124",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 660ms, Q3: 784ms\nAll times: 574, 588, 617, 619, 635, 636, 657, 660, 665, 706, 717, 721, 723, 724, 729, 742, 746, 750, 760, 764, 767, 767, 784, 785, 786, 786, 799, 826, 828, 844ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 804,
            "range": "±12",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 797ms, Q3: 809ms\nAll times: 781, 784, 789, 795, 796, 797, 799, 802, 802, 802, 804, 805, 805, 807, 808, 809, 813, 818, 818, 821ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1190,
            "range": "±10",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1187ms, Q3: 1197ms\nAll times: 1174, 1175, 1183, 1183, 1187, 1187, 1188, 1188, 1189, 1190, 1190, 1191, 1193, 1196, 1196, 1197, 1200, 1211, 1217, 1228ms"
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
          "id": "eb54625652e35d5937bcf1deb09368533f96faed",
          "message": "Merge pull request #1614 from yamadashy/ci/schema-update-auto-pr\n\nci(schema): Deliver schema updates via PR instead of direct push to main",
          "timestamp": "2026-06-03T22:10:52+09:00",
          "tree_id": "a3a0d9d8a04400c366e50739b9f5cfd9d94e5466",
          "url": "https://github.com/stungkit/repomix/commit/eb54625652e35d5937bcf1deb09368533f96faed"
        },
        "date": 1780507851503,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 967,
            "range": "±98",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 897ms, Q3: 995ms\nAll times: 799, 802, 817, 823, 857, 888, 894, 897, 905, 908, 918, 919, 944, 954, 962, 967, 975, 979, 982, 985, 991, 995, 995, 1008, 1010, 1022, 1035, 1038, 1044, 1055ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 877,
            "range": "±17",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 868ms, Q3: 885ms\nAll times: 854, 862, 865, 866, 868, 868, 869, 875, 876, 876, 877, 882, 882, 883, 885, 885, 892, 915, 919, 965ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1416,
            "range": "±30",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1396ms, Q3: 1426ms\nAll times: 1378, 1383, 1385, 1386, 1391, 1396, 1398, 1399, 1410, 1415, 1416, 1416, 1419, 1419, 1425, 1426, 1431, 1444, 1449, 1455ms"
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
          "id": "edbe25eaa4a8f10d0ef68fc07e55881d13a4d3e8",
          "message": "Merge pull request #1621 from yamadashy/feat/token-budget-1616\n\nfeat(cli): Add --token-budget guard for CI/agent context limits",
          "timestamp": "2026-06-05T22:26:45+09:00",
          "tree_id": "38e4ced9ab1fb4008cfba49300e440d5f6901de0",
          "url": "https://github.com/stungkit/repomix/commit/edbe25eaa4a8f10d0ef68fc07e55881d13a4d3e8"
        },
        "date": 1780745399939,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 630,
            "range": "±128",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 587ms, Q3: 715ms\nAll times: 545, 556, 558, 571, 572, 575, 579, 587, 593, 596, 599, 610, 615, 615, 627, 630, 632, 665, 668, 674, 675, 687, 715, 752, 753, 806, 845, 866, 906, 965ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 876,
            "range": "±21",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 868ms, Q3: 889ms\nAll times: 847, 851, 863, 863, 867, 868, 871, 875, 875, 876, 876, 878, 880, 885, 889, 889, 896, 897, 898, 905ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1099,
            "range": "±35",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1088ms, Q3: 1123ms\nAll times: 1078, 1082, 1083, 1085, 1087, 1088, 1091, 1092, 1092, 1093, 1099, 1103, 1109, 1112, 1117, 1123, 1124, 1126, 1126, 1129ms"
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
          "id": "d62905673dd0e5bea9f335211e7c3814754cbed6",
          "message": "Merge pull request #1618 from Samsen879/fix-multiroot-output-paths\n\nfix multi-root duplicate relative paths",
          "timestamp": "2026-06-07T19:37:02+09:00",
          "tree_id": "fcfa9b334934e58c13a8c9068f0df7a91681a4fa",
          "url": "https://github.com/stungkit/repomix/commit/d62905673dd0e5bea9f335211e7c3814754cbed6"
        },
        "date": 1780831819232,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 585,
            "range": "±113",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 552ms, Q3: 665ms\nAll times: 498, 522, 534, 542, 548, 548, 549, 552, 555, 556, 562, 568, 579, 584, 585, 585, 620, 635, 643, 646, 648, 654, 665, 675, 691, 705, 719, 722, 726, 806ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 848,
            "range": "±14",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 843ms, Q3: 857ms\nAll times: 823, 826, 839, 843, 843, 843, 844, 845, 846, 848, 848, 850, 852, 854, 855, 857, 864, 866, 868, 875ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1156,
            "range": "±42",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1142ms, Q3: 1184ms\nAll times: 1121, 1123, 1127, 1132, 1134, 1142, 1143, 1150, 1153, 1155, 1156, 1157, 1172, 1176, 1182, 1184, 1188, 1191, 1204, 1247ms"
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
          "id": "fc69dcc31357d5db934f67ceaff4150f67e4735c",
          "message": "Merge pull request #1622 from Samsen879/fix-ignore-gitignore-conflict\n\nfix(file): keep ignored .gitignore rules active",
          "timestamp": "2026-06-08T00:33:17+09:00",
          "tree_id": "0f9a330968372237c5335d0717c3b2158eb81bbe",
          "url": "https://github.com/stungkit/repomix/commit/fc69dcc31357d5db934f67ceaff4150f67e4735c"
        },
        "date": 1780853302299,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 484,
            "range": "±16",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 477ms, Q3: 493ms\nAll times: 468, 468, 468, 469, 473, 474, 477, 477, 479, 479, 482, 482, 483, 484, 484, 484, 486, 488, 488, 489, 492, 492, 493, 499, 506, 537, 542, 617, 619, 663ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 843,
            "range": "±18",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 838ms, Q3: 856ms\nAll times: 827, 829, 834, 837, 838, 838, 838, 839, 840, 843, 843, 844, 848, 851, 853, 856, 857, 857, 858, 869ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1218,
            "range": "±22",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1213ms, Q3: 1235ms\nAll times: 1198, 1201, 1206, 1206, 1208, 1213, 1213, 1214, 1216, 1216, 1218, 1219, 1219, 1223, 1231, 1235, 1240, 1245, 1253, 1267ms"
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
          "id": "915f2af824d38fe6a04eaa7885b530cfb940ce9b",
          "message": "Merge pull request #1641 from yamadashy/renovate/major-root-major-dependencies\n\nfix(deps): update root major dependencies to v15",
          "timestamp": "2026-06-13T17:35:16+09:00",
          "tree_id": "ece2c7d7f1dbbd10ee344d655b360cf0649220b9",
          "url": "https://github.com/stungkit/repomix/commit/915f2af824d38fe6a04eaa7885b530cfb940ce9b"
        },
        "date": 1781350165865,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 526,
            "range": "±59",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 501ms, Q3: 560ms\nAll times: 483, 486, 489, 490, 490, 493, 499, 501, 504, 504, 505, 514, 515, 516, 521, 526, 527, 528, 529, 533, 543, 548, 560, 560, 561, 563, 574, 612, 616, 680ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 822,
            "range": "±29",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 813ms, Q3: 842ms\nAll times: 799, 800, 807, 810, 812, 813, 814, 820, 820, 820, 822, 823, 825, 826, 832, 842, 845, 846, 849, 857ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1101,
            "range": "±16",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1093ms, Q3: 1109ms\nAll times: 1077, 1078, 1082, 1082, 1092, 1093, 1095, 1097, 1100, 1100, 1101, 1102, 1104, 1104, 1107, 1109, 1109, 1109, 1110, 1111ms"
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
          "id": "d7abd413dd88adc73eb62a9c0536f41e8c6e42fa",
          "message": "Merge pull request #1628 from serhiizghama/feat/auto-detect-github-shorthand\n\nfeat(cli): auto-detect GitHub shorthand (owner/repo) in positional arguments",
          "timestamp": "2026-06-14T20:51:42+09:00",
          "tree_id": "ccf6bd0d6a35035a8f9f78612082ba91562e4a74",
          "url": "https://github.com/stungkit/repomix/commit/d7abd413dd88adc73eb62a9c0536f41e8c6e42fa"
        },
        "date": 1781458180158,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 607,
            "range": "±149",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 563ms, Q3: 712ms\nAll times: 500, 513, 514, 520, 546, 553, 559, 563, 572, 582, 594, 597, 604, 605, 606, 607, 647, 649, 657, 658, 662, 674, 712, 716, 755, 774, 787, 846, 851, 1728ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 797,
            "range": "±23",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 789ms, Q3: 812ms\nAll times: 778, 780, 786, 787, 788, 789, 793, 793, 794, 794, 797, 800, 803, 810, 810, 812, 816, 819, 823, 824ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1050,
            "range": "±17",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1043ms, Q3: 1060ms\nAll times: 1025, 1028, 1037, 1041, 1042, 1043, 1045, 1046, 1048, 1049, 1050, 1052, 1052, 1055, 1055, 1060, 1071, 1072, 1079, 1109ms"
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
          "id": "f3741808966bdea4dda82e4e270433de8ace0a66",
          "message": "Merge pull request #1643 from yamadashy/feat/file-watch-option\n\nfeat(cli): add --watch / -w option to auto re-pack on file changes",
          "timestamp": "2026-06-18T00:13:07+09:00",
          "tree_id": "cdefc0641fa153bbef64c3f76568e7f8ed075223",
          "url": "https://github.com/stungkit/repomix/commit/f3741808966bdea4dda82e4e270433de8ace0a66"
        },
        "date": 1781717300633,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 541,
            "range": "±103",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 504ms, Q3: 607ms\nAll times: 493, 493, 496, 496, 500, 502, 503, 504, 506, 515, 519, 521, 525, 526, 534, 541, 547, 552, 557, 573, 582, 606, 607, 624, 645, 647, 659, 660, 690, 839ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 649,
            "range": "±23",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 639ms, Q3: 662ms\nAll times: 625, 626, 638, 638, 639, 639, 641, 644, 647, 648, 649, 652, 653, 658, 661, 662, 684, 684, 700, 760ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1251,
            "range": "±18",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1247ms, Q3: 1265ms\nAll times: 1220, 1222, 1234, 1246, 1246, 1247, 1247, 1249, 1250, 1251, 1251, 1255, 1256, 1263, 1264, 1265, 1270, 1273, 1275, 1281ms"
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
          "id": "bb4ac4763faeb7fc3d31438f072a6946b5b290b9",
          "message": "1.15.0\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-06-19T00:19:03+09:00",
          "tree_id": "9bf73568e26cc5f0740cd3273ca86fc233183e7d",
          "url": "https://github.com/stungkit/repomix/commit/bb4ac4763faeb7fc3d31438f072a6946b5b290b9"
        },
        "date": 1781803981595,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 516,
            "range": "±29",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 506ms, Q3: 535ms\nAll times: 496, 496, 497, 499, 501, 503, 505, 506, 510, 510, 512, 515, 516, 516, 516, 516, 518, 518, 522, 525, 532, 532, 535, 540, 543, 547, 555, 557, 563, 596ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 859,
            "range": "±12",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 855ms, Q3: 867ms\nAll times: 834, 840, 846, 847, 847, 855, 856, 857, 857, 858, 859, 860, 862, 864, 866, 867, 875, 875, 892, 905ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1198,
            "range": "±23",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1187ms, Q3: 1210ms\nAll times: 1171, 1173, 1177, 1180, 1182, 1187, 1188, 1188, 1191, 1196, 1198, 1198, 1207, 1208, 1209, 1210, 1215, 1217, 1238, 1454ms"
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
          "id": "923ae99bba1707facc2b59102da927780bce079c",
          "message": "Merge pull request #1660 from yamadashy/renovate/browser-non-major-dependencies\n\nchore(deps): update browser non-major dependencies",
          "timestamp": "2026-06-20T19:49:25+09:00",
          "tree_id": "a46d3c66887507d962143c62d0b77819e13ad4d0",
          "url": "https://github.com/stungkit/repomix/commit/923ae99bba1707facc2b59102da927780bce079c"
        },
        "date": 1781954911759,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 674,
            "range": "±170",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 610ms, Q3: 780ms\nAll times: 528, 539, 550, 562, 566, 567, 573, 610, 628, 632, 635, 641, 662, 668, 673, 674, 727, 732, 735, 742, 765, 767, 780, 784, 786, 826, 842, 879, 879, 1007ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 507,
            "range": "±22",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 498ms, Q3: 520ms\nAll times: 482, 489, 489, 492, 496, 498, 498, 498, 499, 501, 507, 507, 511, 515, 517, 520, 521, 530, 574, 628ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1221,
            "range": "±21",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1207ms, Q3: 1228ms\nAll times: 1196, 1200, 1202, 1204, 1205, 1207, 1210, 1212, 1212, 1217, 1221, 1222, 1224, 1227, 1227, 1228, 1228, 1233, 1238, 1242ms"
          }
        ]
      }
    ]
  }
}