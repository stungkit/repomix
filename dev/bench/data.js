window.BENCHMARK_DATA = {
  "lastUpdate": 1774805467648,
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
      }
    ]
  }
}