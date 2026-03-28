window.BENCHMARK_DATA = {
  "lastUpdate": 1774675786144,
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
      }
    ]
  }
}