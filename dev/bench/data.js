window.BENCHMARK_DATA = {
  "lastUpdate": 1690390491250,
  "repoUrl": "https://github.com/alcides/GeneticEngine",
  "entries": {
    "Python Benchmark with pytest-benchmark": [
      {
        "commit": {
          "author": {
            "email": "me@alcidesfonseca.com",
            "name": "Alcides Fonseca",
            "username": "alcides"
          },
          "committer": {
            "email": "me@alcidesfonseca.com",
            "name": "Alcides Fonseca",
            "username": "alcides"
          },
          "distinct": true,
          "id": "5242bda4b294d27c6d45ffe233bccdf0838abe4c",
          "message": "Run Examples now fails the action",
          "timestamp": "2023-07-21T11:22:50+01:00",
          "tree_id": "5351ac871d4f39e490d4863a74f0019b305b77f6",
          "url": "https://github.com/alcides/GeneticEngine/commit/5242bda4b294d27c6d45ffe233bccdf0838abe4c"
        },
        "date": 1689938270216,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 13434.649736153726,
            "unit": "iter/sec",
            "range": "stddev: 0.00001855094454851367",
            "extra": "mean: 74.4343931281602 usec\nrounds: 15949"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 13774.313699647659,
            "unit": "iter/sec",
            "range": "stddev: 0.00001812627349277157",
            "extra": "mean: 72.59889834116234 usec\nrounds: 17362"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 13378.374516912692,
            "unit": "iter/sec",
            "range": "stddev: 0.000019430585534826976",
            "extra": "mean: 74.74749632220406 usec\nrounds: 16314"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 98.30437049415733,
            "unit": "iter/sec",
            "range": "stddev: 0.00036136113678735985",
            "extra": "mean: 10.172487702969773 msec\nrounds: 101"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 100.67932996681975,
            "unit": "iter/sec",
            "range": "stddev: 0.0001764486496191217",
            "extra": "mean: 9.932525378640916 msec\nrounds: 103"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 99.56243816946305,
            "unit": "iter/sec",
            "range": "stddev: 0.00021237481294225256",
            "extra": "mean: 10.043948484848492 msec\nrounds: 99"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 99.35845589877314,
            "unit": "iter/sec",
            "range": "stddev: 0.00021526703825194049",
            "extra": "mean: 10.064568646465327 msec\nrounds: 99"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 99.29363182307642,
            "unit": "iter/sec",
            "range": "stddev: 0.00018397278850586755",
            "extra": "mean: 10.071139323232954 msec\nrounds: 99"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 99.19926421999713,
            "unit": "iter/sec",
            "range": "stddev: 0.00024869925562952244",
            "extra": "mean: 10.080719931372379 msec\nrounds: 102"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 68.25576865335266,
            "unit": "iter/sec",
            "range": "stddev: 0.00004976492094797376",
            "extra": "mean: 14.650776333333123 msec\nrounds: 69"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 7.893034690999428,
            "unit": "iter/sec",
            "range": "stddev: 0.0003240283661442544",
            "extra": "mean: 126.69398262499953 msec\nrounds: 8"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 13.891253599193723,
            "unit": "iter/sec",
            "range": "stddev: 0.0002463425655866943",
            "extra": "mean: 71.98774342857307 msec\nrounds: 14"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 17.308813169847493,
            "unit": "iter/sec",
            "range": "stddev: 0.00013809642929073625",
            "extra": "mean: 57.774036277775075 msec\nrounds: 18"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 1.4473766973430395,
            "unit": "iter/sec",
            "range": "stddev: 0.0037154520110181726",
            "extra": "mean: 690.905140199996 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 1.4431575972349147,
            "unit": "iter/sec",
            "range": "stddev: 0.0027683780708962296",
            "extra": "mean: 692.9250152000009 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 1.1895631412870946,
            "unit": "iter/sec",
            "range": "stddev: 0.021946272869272997",
            "extra": "mean: 840.6447420000006 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.1414817979075766,
            "unit": "iter/sec",
            "range": "stddev: 0.03573397689784015",
            "extra": "mean: 7.068047019400001 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 1.0168788289943191,
            "unit": "iter/sec",
            "range": "stddev: 0.011191799630570235",
            "extra": "mean: 983.4013369999923 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.09788534316854589,
            "unit": "iter/sec",
            "range": "stddev: 0.686186046936981",
            "extra": "mean: 10.216034062199991 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 6.253992789104795,
            "unit": "iter/sec",
            "range": "stddev: 0.0167840533813761",
            "extra": "mean: 159.89784985715363 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 6.296028782363557,
            "unit": "iter/sec",
            "range": "stddev: 0.016287579544691764",
            "extra": "mean: 158.83027771429528 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 1.1545301741643763,
            "unit": "iter/sec",
            "range": "stddev: 0.20317572510772564",
            "extra": "mean: 866.1531957999955 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.15032320166917787,
            "unit": "iter/sec",
            "range": "stddev: 0.19316802019901794",
            "extra": "mean: 6.6523330324000085 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 1.136546958288308,
            "unit": "iter/sec",
            "range": "stddev: 0.07728103973990008",
            "extra": "mean: 879.8580584000206 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.04498960719131219,
            "unit": "iter/sec",
            "range": "stddev: 12.780711018409619",
            "extra": "mean: 22.227355659 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "alcides",
            "username": "alcides"
          },
          "committer": {
            "name": "alcides",
            "username": "alcides"
          },
          "id": "c052f153b4d45066bcff3ecaedb336b2dcc18a9a",
          "message": "Added tests for randoms",
          "timestamp": "2023-07-13T18:18:30Z",
          "url": "https://github.com/alcides/GeneticEngine/pull/127/commits/c052f153b4d45066bcff3ecaedb336b2dcc18a9a"
        },
        "date": 1689939094630,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 10293.791235006403,
            "unit": "iter/sec",
            "range": "stddev: 0.00008539972143591597",
            "extra": "mean: 97.14593750447068 usec\nrounds: 14145"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 10334.438831888312,
            "unit": "iter/sec",
            "range": "stddev: 0.0000374590510148327",
            "extra": "mean: 96.76384139159686 usec\nrounds: 14085"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 10188.313314527519,
            "unit": "iter/sec",
            "range": "stddev: 0.0000426853135585671",
            "extra": "mean: 98.15167330730787 usec\nrounds: 13352"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 75.00684578105312,
            "unit": "iter/sec",
            "range": "stddev: 0.0007865555519438186",
            "extra": "mean: 13.332116416667159 msec\nrounds: 84"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 73.94741421133514,
            "unit": "iter/sec",
            "range": "stddev: 0.0008377500301809994",
            "extra": "mean: 13.523123298701005 msec\nrounds: 77"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 73.32742610892166,
            "unit": "iter/sec",
            "range": "stddev: 0.0008132569420791671",
            "extra": "mean: 13.637462175674694 msec\nrounds: 74"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 75.86147361129727,
            "unit": "iter/sec",
            "range": "stddev: 0.0005744631894457777",
            "extra": "mean: 13.181921631576113 msec\nrounds: 76"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 72.51555927114548,
            "unit": "iter/sec",
            "range": "stddev: 0.001507784335795307",
            "extra": "mean: 13.790143936708326 msec\nrounds: 79"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 76.78800608203122,
            "unit": "iter/sec",
            "range": "stddev: 0.0008763744153631331",
            "extra": "mean: 13.022867125000204 msec\nrounds: 80"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 54.48438307866536,
            "unit": "iter/sec",
            "range": "stddev: 0.0010090895406954495",
            "extra": "mean: 18.353883140352075 msec\nrounds: 57"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 6.140821775876139,
            "unit": "iter/sec",
            "range": "stddev: 0.0027625307552322227",
            "extra": "mean: 162.84465442857206 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 10.429048255459795,
            "unit": "iter/sec",
            "range": "stddev: 0.008604332168168452",
            "extra": "mean: 95.88602674999436 msec\nrounds: 12"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 13.282087661689959,
            "unit": "iter/sec",
            "range": "stddev: 0.00121788478529845",
            "extra": "mean: 75.28936907142533 msec\nrounds: 14"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 1.0854360952410131,
            "unit": "iter/sec",
            "range": "stddev: 0.004498499576200587",
            "extra": "mean: 921.2886915999945 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 1.0763727230786777,
            "unit": "iter/sec",
            "range": "stddev: 0.009450837208444047",
            "extra": "mean: 929.0462110000021 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 0.8445830737396057,
            "unit": "iter/sec",
            "range": "stddev: 0.03973195539966989",
            "extra": "mean: 1.1840161507999993 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.10475014843566367,
            "unit": "iter/sec",
            "range": "stddev: 0.14427327004410065",
            "extra": "mean: 9.546525851599995 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 0.8206498287339953,
            "unit": "iter/sec",
            "range": "stddev: 0.020708976554613873",
            "extra": "mean: 1.2185465286000068 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.0696462115642362,
            "unit": "iter/sec",
            "range": "stddev: 0.31675895052128983",
            "extra": "mean: 14.358282777199998 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 4.891977453349203,
            "unit": "iter/sec",
            "range": "stddev: 0.019703376975134648",
            "extra": "mean: 204.41631416665018 msec\nrounds: 6"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 4.788328625186497,
            "unit": "iter/sec",
            "range": "stddev: 0.02292995293694661",
            "extra": "mean: 208.8411381666712 msec\nrounds: 6"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 0.9285753658769079,
            "unit": "iter/sec",
            "range": "stddev: 0.2470941711582176",
            "extra": "mean: 1.0769185105999894 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.11014866655883475,
            "unit": "iter/sec",
            "range": "stddev: 0.2833404057175113",
            "extra": "mean: 9.07863918139999 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 0.9079788034454704,
            "unit": "iter/sec",
            "range": "stddev: 0.10992738431088803",
            "extra": "mean: 1.1013472960000172 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.029794969540828584,
            "unit": "iter/sec",
            "range": "stddev: 8.048170695731272",
            "extra": "mean: 33.56271261259999 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@alcidesfonseca.com",
            "name": "Alcides Fonseca",
            "username": "alcides"
          },
          "committer": {
            "email": "me@alcidesfonseca.com",
            "name": "Alcides Fonseca",
            "username": "alcides"
          },
          "distinct": true,
          "id": "801ee51ec4acd93454056f2cf93f6979cfc596d0",
          "message": "Added docstrings to the example",
          "timestamp": "2023-07-21T12:37:38+01:00",
          "tree_id": "fd6a86198396d2b81951b478c2ae3c287399f5eb",
          "url": "https://github.com/alcides/GeneticEngine/commit/801ee51ec4acd93454056f2cf93f6979cfc596d0"
        },
        "date": 1689940079603,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 14229.563572788535,
            "unit": "iter/sec",
            "range": "stddev: 0.00002093272357001721",
            "extra": "mean: 70.2762242063642 usec\nrounds: 20160"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 13976.232212587232,
            "unit": "iter/sec",
            "range": "stddev: 0.000022356144981370582",
            "extra": "mean: 71.55004187032489 usec\nrounds: 17793"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 14702.08149168054,
            "unit": "iter/sec",
            "range": "stddev: 0.000022415082008256385",
            "extra": "mean: 68.01757972609998 usec\nrounds: 18181"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 103.26115241099542,
            "unit": "iter/sec",
            "range": "stddev: 0.0008904072031767969",
            "extra": "mean: 9.684183999998806 msec\nrounds: 105"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 106.57319125601732,
            "unit": "iter/sec",
            "range": "stddev: 0.0007925912419038477",
            "extra": "mean: 9.383222818182599 msec\nrounds: 121"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 100.93681018913232,
            "unit": "iter/sec",
            "range": "stddev: 0.0010205113787419703",
            "extra": "mean: 9.907188449151807 msec\nrounds: 118"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 99.17786331904229,
            "unit": "iter/sec",
            "range": "stddev: 0.0011390064029139608",
            "extra": "mean: 10.082895179775452 msec\nrounds: 89"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 106.0868713946205,
            "unit": "iter/sec",
            "range": "stddev: 0.00087764021999175",
            "extra": "mean: 9.426237072070997 msec\nrounds: 111"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 103.54696150414722,
            "unit": "iter/sec",
            "range": "stddev: 0.0008703651728855673",
            "extra": "mean: 9.657453830356465 msec\nrounds: 112"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 68.0344002153956,
            "unit": "iter/sec",
            "range": "stddev: 0.0011387567925965985",
            "extra": "mean: 14.698446621621107 msec\nrounds: 74"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 7.999609057327692,
            "unit": "iter/sec",
            "range": "stddev: 0.0058925079816000816",
            "extra": "mean: 125.00610877777754 msec\nrounds: 9"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 14.350763096661414,
            "unit": "iter/sec",
            "range": "stddev: 0.0034608974577752037",
            "extra": "mean: 69.68270559999988 msec\nrounds: 15"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 17.609770434491963,
            "unit": "iter/sec",
            "range": "stddev: 0.003227114256795298",
            "extra": "mean: 56.786657368418425 msec\nrounds: 19"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 1.6260182727237582,
            "unit": "iter/sec",
            "range": "stddev: 0.013824355500115848",
            "extra": "mean: 614.9992387999987 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 1.5800536449764429,
            "unit": "iter/sec",
            "range": "stddev: 0.021737709788828594",
            "extra": "mean: 632.8899041999989 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 1.2857387924467079,
            "unit": "iter/sec",
            "range": "stddev: 0.0185121892191832",
            "extra": "mean: 777.7629529999956 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.14136702691413686,
            "unit": "iter/sec",
            "range": "stddev: 0.21585684780163394",
            "extra": "mean: 7.073785321999997 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 1.0977821683814735,
            "unit": "iter/sec",
            "range": "stddev: 0.025591372858172836",
            "extra": "mean: 910.9275307999951 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.09447912254731194,
            "unit": "iter/sec",
            "range": "stddev: 0.41636599797487556",
            "extra": "mean: 10.584348933799992 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 6.533089263215234,
            "unit": "iter/sec",
            "range": "stddev: 0.013485221189898372",
            "extra": "mean: 153.06694271430388 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 6.3939688760698425,
            "unit": "iter/sec",
            "range": "stddev: 0.02051709318225775",
            "extra": "mean: 156.39738312499674 msec\nrounds: 8"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 1.202417999397719,
            "unit": "iter/sec",
            "range": "stddev: 0.19340860658355305",
            "extra": "mean: 831.6575437999859 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.14440943185364563,
            "unit": "iter/sec",
            "range": "stddev: 0.23653653590317303",
            "extra": "mean: 6.924755448200005 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 1.173854817390631,
            "unit": "iter/sec",
            "range": "stddev: 0.07700561125586552",
            "extra": "mean: 851.8941057999882 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.05829701097460691,
            "unit": "iter/sec",
            "range": "stddev: 7.50438607841394",
            "extra": "mean: 17.153538119400004 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "alcides",
            "username": "alcides"
          },
          "committer": {
            "name": "alcides",
            "username": "alcides"
          },
          "id": "71a278fbdbf9b90da44e09b384fc9074be069f1d",
          "message": "String metahandler",
          "timestamp": "2023-07-13T18:18:30Z",
          "url": "https://github.com/alcides/GeneticEngine/pull/126/commits/71a278fbdbf9b90da44e09b384fc9074be069f1d"
        },
        "date": 1689940346982,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 13353.111935704252,
            "unit": "iter/sec",
            "range": "stddev: 0.000018554684203557938",
            "extra": "mean: 74.8889101518087 usec\nrounds: 15949"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 13743.752624403494,
            "unit": "iter/sec",
            "range": "stddev: 0.00001818717010510766",
            "extra": "mean: 72.76033171787402 usec\nrounds: 17331"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 13314.164716902143,
            "unit": "iter/sec",
            "range": "stddev: 0.000019449107889158022",
            "extra": "mean: 75.10797870260042 usec\nrounds: 16340"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 99.90821295340542,
            "unit": "iter/sec",
            "range": "stddev: 0.00017293537309531103",
            "extra": "mean: 10.009187137261417 msec\nrounds: 102"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 100.78700038082253,
            "unit": "iter/sec",
            "range": "stddev: 0.00017036084357371144",
            "extra": "mean: 9.921914495138376 msec\nrounds: 103"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 99.23910779795031,
            "unit": "iter/sec",
            "range": "stddev: 0.00021807381740333363",
            "extra": "mean: 10.076672616162456 msec\nrounds: 99"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 98.70054225870408,
            "unit": "iter/sec",
            "range": "stddev: 0.00021559893785753548",
            "extra": "mean: 10.131656595957692 msec\nrounds: 99"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 99.15960454328798,
            "unit": "iter/sec",
            "range": "stddev: 0.00018169446230735837",
            "extra": "mean: 10.084751795913542 msec\nrounds: 98"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 100.03923725236446,
            "unit": "iter/sec",
            "range": "stddev: 0.00019743415041885865",
            "extra": "mean: 9.996077813721683 msec\nrounds: 102"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 68.67694311028121,
            "unit": "iter/sec",
            "range": "stddev: 0.0001112019719296365",
            "extra": "mean: 14.560927652155442 msec\nrounds: 69"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 7.791924813785573,
            "unit": "iter/sec",
            "range": "stddev: 0.00024132445929388703",
            "extra": "mean: 128.3379939999918 msec\nrounds: 8"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 13.810902163398135,
            "unit": "iter/sec",
            "range": "stddev: 0.0002430738965501304",
            "extra": "mean: 72.40656607141968 msec\nrounds: 14"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 17.277035354717423,
            "unit": "iter/sec",
            "range": "stddev: 0.0005487974973657457",
            "extra": "mean: 57.88030061112042 msec\nrounds: 18"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 1.4448321512497924,
            "unit": "iter/sec",
            "range": "stddev: 0.004328722040741135",
            "extra": "mean: 692.1219181999732 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 1.441856390148327,
            "unit": "iter/sec",
            "range": "stddev: 0.0037348578959131656",
            "extra": "mean: 693.5503472000619 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 1.1906668360810653,
            "unit": "iter/sec",
            "range": "stddev: 0.022837618570395967",
            "extra": "mean: 839.8655020000206 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.14187597057910173,
            "unit": "iter/sec",
            "range": "stddev: 0.03807388338344364",
            "extra": "mean: 7.048409930999969 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 1.004040652567377,
            "unit": "iter/sec",
            "range": "stddev: 0.018939028526289557",
            "extra": "mean: 995.9756086000652 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.09836751559539808,
            "unit": "iter/sec",
            "range": "stddev: 0.7072106984194706",
            "extra": "mean: 10.165957673599952 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 6.351906425077513,
            "unit": "iter/sec",
            "range": "stddev: 0.014978726342150884",
            "extra": "mean: 157.43304971432994 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 6.296861405625959,
            "unit": "iter/sec",
            "range": "stddev: 0.015594077903318819",
            "extra": "mean: 158.80927585710327 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 1.1444435377909257,
            "unit": "iter/sec",
            "range": "stddev: 0.20358995557859566",
            "extra": "mean: 873.7870999999359 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.15336155601328424,
            "unit": "iter/sec",
            "range": "stddev: 0.1355977382610363",
            "extra": "mean: 6.5205389537999965 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 1.113010720144807,
            "unit": "iter/sec",
            "range": "stddev: 0.08982455712523386",
            "extra": "mean: 898.4639428000264 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.047888044930634366,
            "unit": "iter/sec",
            "range": "stddev: 8.363478810496954",
            "extra": "mean: 20.882038543199997 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "alcides",
            "username": "alcides"
          },
          "committer": {
            "name": "alcides",
            "username": "alcides"
          },
          "id": "cb56b64497c41576d3eb540d55032f9affc65742",
          "message": "Added Support for Coevolution",
          "timestamp": "2023-07-13T18:18:30Z",
          "url": "https://github.com/alcides/GeneticEngine/pull/125/commits/cb56b64497c41576d3eb540d55032f9affc65742"
        },
        "date": 1689940918646,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 11729.797187560376,
            "unit": "iter/sec",
            "range": "stddev: 0.000021640004010856808",
            "extra": "mean: 85.25296593026475 usec\nrounds: 14706"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 11948.39460418117,
            "unit": "iter/sec",
            "range": "stddev: 0.00002110832922572466",
            "extra": "mean: 83.69325194951834 usec\nrounds: 15015"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 11595.372847372362,
            "unit": "iter/sec",
            "range": "stddev: 0.000023379437513515486",
            "extra": "mean: 86.24129755574104 usec\nrounds: 14451"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 85.90421867218528,
            "unit": "iter/sec",
            "range": "stddev: 0.00024715115022517424",
            "extra": "mean: 11.640871839089174 msec\nrounds: 87"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 85.78109434661849,
            "unit": "iter/sec",
            "range": "stddev: 0.0002201692688870004",
            "extra": "mean: 11.657580351671282 msec\nrounds: 91"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 86.85116625457034,
            "unit": "iter/sec",
            "range": "stddev: 0.0003651741584098381",
            "extra": "mean: 11.513950164686214 msec\nrounds: 85"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 87.71473879935046,
            "unit": "iter/sec",
            "range": "stddev: 0.00038561013423402113",
            "extra": "mean: 11.400592576437168 msec\nrounds: 85"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 87.19441924598785,
            "unit": "iter/sec",
            "range": "stddev: 0.0003371220822869797",
            "extra": "mean: 11.468623894137744 msec\nrounds: 85"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 85.24890034223164,
            "unit": "iter/sec",
            "range": "stddev: 0.0002866942369902434",
            "extra": "mean: 11.730356590941359 msec\nrounds: 88"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 55.81154541938236,
            "unit": "iter/sec",
            "range": "stddev: 0.0002435045060679045",
            "extra": "mean: 17.91743970688756 msec\nrounds: 58"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 6.452562547969154,
            "unit": "iter/sec",
            "range": "stddev: 0.0012532932373488478",
            "extra": "mean: 154.97718814283093 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 11.387418934152494,
            "unit": "iter/sec",
            "range": "stddev: 0.0007905507908853522",
            "extra": "mean: 87.81621241674505 msec\nrounds: 12"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 14.536395379284562,
            "unit": "iter/sec",
            "range": "stddev: 0.0015830025660682014",
            "extra": "mean: 68.79284539997268 msec\nrounds: 15"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 1.3180836586465456,
            "unit": "iter/sec",
            "range": "stddev: 0.00965518193784871",
            "extra": "mean: 758.6771851999401 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 1.3225097401070725,
            "unit": "iter/sec",
            "range": "stddev: 0.004942712342187002",
            "extra": "mean: 756.1380983999697 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 1.0359824845894994,
            "unit": "iter/sec",
            "range": "stddev: 0.022675620843804777",
            "extra": "mean: 965.2672847999384 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.11280973009487477,
            "unit": "iter/sec",
            "range": "stddev: 0.06631534808527273",
            "extra": "mean: 8.864483579199987 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 0.8766597799833641,
            "unit": "iter/sec",
            "range": "stddev: 0.013741992314029368",
            "extra": "mean: 1.1406933713999934 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.07971650278665152,
            "unit": "iter/sec",
            "range": "stddev: 0.7736527138709451",
            "extra": "mean: 12.544453971799793 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 5.39172560662905,
            "unit": "iter/sec",
            "range": "stddev: 0.01865752102004357",
            "extra": "mean: 185.46937900002072 msec\nrounds: 6"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 5.429614196318692,
            "unit": "iter/sec",
            "range": "stddev: 0.01999350749697415",
            "extra": "mean: 184.17514833337614 msec\nrounds: 6"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 1.035794087293521,
            "unit": "iter/sec",
            "range": "stddev: 0.21986026688878477",
            "extra": "mean: 965.4428541998641 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.12428888263394121,
            "unit": "iter/sec",
            "range": "stddev: 0.07284935950809118",
            "extra": "mean: 8.045771904999947 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 1.0027954077210852,
            "unit": "iter/sec",
            "range": "stddev: 0.09059685302102274",
            "extra": "mean: 997.2123847999683 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.03854020568880481,
            "unit": "iter/sec",
            "range": "stddev: 2.8483218342022765",
            "extra": "mean: 25.946929502000057 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "alcides",
            "username": "alcides"
          },
          "committer": {
            "name": "alcides",
            "username": "alcides"
          },
          "id": "86e33e7e2f81be903afb77a1f3d73d089c21e6fd",
          "message": "Added Support for Coevolution",
          "timestamp": "2023-07-13T18:18:30Z",
          "url": "https://github.com/alcides/GeneticEngine/pull/125/commits/86e33e7e2f81be903afb77a1f3d73d089c21e6fd"
        },
        "date": 1689946950712,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 13294.183690018997,
            "unit": "iter/sec",
            "range": "stddev: 0.000019016501402709935",
            "extra": "mean: 75.2208652533348 usec\nrounds: 16557"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 13743.569841756742,
            "unit": "iter/sec",
            "range": "stddev: 0.00001790375097707239",
            "extra": "mean: 72.76129939411558 usec\nrounds: 16667"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 13244.031328524943,
            "unit": "iter/sec",
            "range": "stddev: 0.000019671786012558018",
            "extra": "mean: 75.50571085151421 usec\nrounds: 16182"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 99.50630331841316,
            "unit": "iter/sec",
            "range": "stddev: 0.00016890622355524994",
            "extra": "mean: 10.049614613860898 msec\nrounds: 101"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 100.25456756598288,
            "unit": "iter/sec",
            "range": "stddev: 0.0001717051679169459",
            "extra": "mean: 9.97460788349465 msec\nrounds: 103"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 98.30021531560101,
            "unit": "iter/sec",
            "range": "stddev: 0.00026758716114494294",
            "extra": "mean: 10.172917696969604 msec\nrounds: 99"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 98.80404688107092,
            "unit": "iter/sec",
            "range": "stddev: 0.0002174112350095679",
            "extra": "mean: 10.121042928572411 msec\nrounds: 98"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 98.97978075680966,
            "unit": "iter/sec",
            "range": "stddev: 0.00017685500838262208",
            "extra": "mean: 10.103073500000672 msec\nrounds: 98"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 99.31642930537538,
            "unit": "iter/sec",
            "range": "stddev: 0.00018757605131892153",
            "extra": "mean: 10.06882755445454 msec\nrounds: 101"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 68.63982289397897,
            "unit": "iter/sec",
            "range": "stddev: 0.00006490737562790588",
            "extra": "mean: 14.568802159419894 msec\nrounds: 69"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 7.784775563348856,
            "unit": "iter/sec",
            "range": "stddev: 0.00018289955299792538",
            "extra": "mean: 128.45585487500165 msec\nrounds: 8"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 13.747604781822892,
            "unit": "iter/sec",
            "range": "stddev: 0.00024149526991336235",
            "extra": "mean: 72.73994385714388 msec\nrounds: 14"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 17.185657728819585,
            "unit": "iter/sec",
            "range": "stddev: 0.0002463328558725734",
            "extra": "mean: 58.18805516666635 msec\nrounds: 18"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 1.4449312623368666,
            "unit": "iter/sec",
            "range": "stddev: 0.0032386745609080995",
            "extra": "mean: 692.0744439999964 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 1.4400376431369588,
            "unit": "iter/sec",
            "range": "stddev: 0.002718919057971109",
            "extra": "mean: 694.4262914000035 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 1.184813792155001,
            "unit": "iter/sec",
            "range": "stddev: 0.026781350093543144",
            "extra": "mean: 844.0144827999916 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.14022931451990175,
            "unit": "iter/sec",
            "range": "stddev: 0.041809008061975336",
            "extra": "mean: 7.1311765548000094 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 1.0132473016122434,
            "unit": "iter/sec",
            "range": "stddev: 0.014293741028423325",
            "extra": "mean: 986.9258950000017 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.0934396422256201,
            "unit": "iter/sec",
            "range": "stddev: 0.38699353021672955",
            "extra": "mean: 10.702095771999984 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 6.344444442269419,
            "unit": "iter/sec",
            "range": "stddev: 0.01502195392272437",
            "extra": "mean: 157.61821371428044 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 6.252804600594903,
            "unit": "iter/sec",
            "range": "stddev: 0.017157623391674502",
            "extra": "mean: 159.92823442857278 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 1.1470308425419309,
            "unit": "iter/sec",
            "range": "stddev: 0.20392735784017854",
            "extra": "mean: 871.8161385999906 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.14906602802820235,
            "unit": "iter/sec",
            "range": "stddev: 0.21253599558528674",
            "extra": "mean: 6.708436611800016 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 1.1373483761101129,
            "unit": "iter/sec",
            "range": "stddev: 0.07213162257736204",
            "extra": "mean: 879.2380777999938 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.0493517445644109,
            "unit": "iter/sec",
            "range": "stddev: 3.7794636296019153",
            "extra": "mean: 20.2627082148 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "alcides",
            "username": "alcides"
          },
          "committer": {
            "name": "alcides",
            "username": "alcides"
          },
          "id": "7766e74518ffcef467f11d87aee3edcd0649e208",
          "message": "String metahandler",
          "timestamp": "2023-07-13T18:18:30Z",
          "url": "https://github.com/alcides/GeneticEngine/pull/126/commits/7766e74518ffcef467f11d87aee3edcd0649e208"
        },
        "date": 1689946988890,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 13675.280286526993,
            "unit": "iter/sec",
            "range": "stddev: 0.000017985736807613577",
            "extra": "mean: 73.12464381334902 usec\nrounds: 16584"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 14028.459319765569,
            "unit": "iter/sec",
            "range": "stddev: 0.000017494323985240053",
            "extra": "mean: 71.28366538377011 usec\nrounds: 17668"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 13660.794122272035,
            "unit": "iter/sec",
            "range": "stddev: 0.00002911086995803709",
            "extra": "mean: 73.20218656759042 usec\nrounds: 17361"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 100.6293539349358,
            "unit": "iter/sec",
            "range": "stddev: 0.0001697778366518881",
            "extra": "mean: 9.937458215686974 msec\nrounds: 102"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 101.35264558617311,
            "unit": "iter/sec",
            "range": "stddev: 0.0001722259755716814",
            "extra": "mean: 9.86654067307764 msec\nrounds: 104"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 101.19227848412135,
            "unit": "iter/sec",
            "range": "stddev: 0.00020568366452712925",
            "extra": "mean: 9.882176930692548 msec\nrounds: 101"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 101.20638846750201,
            "unit": "iter/sec",
            "range": "stddev: 0.000205932297143119",
            "extra": "mean: 9.880799178216957 msec\nrounds: 101"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 100.1813566067848,
            "unit": "iter/sec",
            "range": "stddev: 0.00017290612799229855",
            "extra": "mean: 9.98189716999974 msec\nrounds: 100"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 100.42114290803889,
            "unit": "iter/sec",
            "range": "stddev: 0.00018272764579449848",
            "extra": "mean: 9.958062326732872 msec\nrounds: 101"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 66.25423259643911,
            "unit": "iter/sec",
            "range": "stddev: 0.00010088889310422759",
            "extra": "mean: 15.093375333332983 msec\nrounds: 66"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 7.602143478328914,
            "unit": "iter/sec",
            "range": "stddev: 0.0003016580670871656",
            "extra": "mean: 131.54184775000033 msec\nrounds: 8"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 13.283812331016945,
            "unit": "iter/sec",
            "range": "stddev: 0.0006090552372410888",
            "extra": "mean: 75.2795940714291 msec\nrounds: 14"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 16.700229560077958,
            "unit": "iter/sec",
            "range": "stddev: 0.00012668614377546586",
            "extra": "mean: 59.87941641176649 msec\nrounds: 17"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 1.51554782309988,
            "unit": "iter/sec",
            "range": "stddev: 0.0034965099775929103",
            "extra": "mean: 659.8274134000036 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 1.5167861081982017,
            "unit": "iter/sec",
            "range": "stddev: 0.002045527458221153",
            "extra": "mean: 659.288738600003 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 1.2071189017354673,
            "unit": "iter/sec",
            "range": "stddev: 0.02204584685474166",
            "extra": "mean: 828.4188066000013 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.12973317792708036,
            "unit": "iter/sec",
            "range": "stddev: 0.0642616677147886",
            "extra": "mean: 7.708128452400001 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 1.0190619952638136,
            "unit": "iter/sec",
            "range": "stddev: 0.012026660809080738",
            "extra": "mean: 981.2945676000027 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.09156222337829385,
            "unit": "iter/sec",
            "range": "stddev: 0.48209937127381536",
            "extra": "mean: 10.921534701800004 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 6.126149297004847,
            "unit": "iter/sec",
            "range": "stddev: 0.015196833746960767",
            "extra": "mean: 163.23467671428003 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 6.059761371842735,
            "unit": "iter/sec",
            "range": "stddev: 0.015994478025936645",
            "extra": "mean: 165.0229998571555 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 1.1790957650551122,
            "unit": "iter/sec",
            "range": "stddev: 0.19226725166084796",
            "extra": "mean: 848.1075325999996 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.14018811793414304,
            "unit": "iter/sec",
            "range": "stddev: 0.09333460260801531",
            "extra": "mean: 7.133272168400003 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 1.1674092177682134,
            "unit": "iter/sec",
            "range": "stddev: 0.06526650268406362",
            "extra": "mean: 856.5976563999925 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.055192710156618266,
            "unit": "iter/sec",
            "range": "stddev: 9.520088054588086",
            "extra": "mean: 18.118334779399994 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "alcides",
            "username": "alcides"
          },
          "committer": {
            "name": "alcides",
            "username": "alcides"
          },
          "id": "9b3577737276eccd7abe9095cfaefdd8070a7649",
          "message": "Added tests for randoms",
          "timestamp": "2023-07-13T18:18:30Z",
          "url": "https://github.com/alcides/GeneticEngine/pull/127/commits/9b3577737276eccd7abe9095cfaefdd8070a7649"
        },
        "date": 1689947136885,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 10126.41433819566,
            "unit": "iter/sec",
            "range": "stddev: 0.00008295562909118002",
            "extra": "mean: 98.75163770734879 usec\nrounds: 13870"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 10807.830985459255,
            "unit": "iter/sec",
            "range": "stddev: 0.00006945154626753237",
            "extra": "mean: 92.52550316019835 usec\nrounds: 14556"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 10241.942583470169,
            "unit": "iter/sec",
            "range": "stddev: 0.00013020887263764857",
            "extra": "mean: 97.63772759417098 usec\nrounds: 13568"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 77.41312532960693,
            "unit": "iter/sec",
            "range": "stddev: 0.0009949633267081223",
            "extra": "mean: 12.917706083331922 msec\nrounds: 84"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 79.33030107801858,
            "unit": "iter/sec",
            "range": "stddev: 0.0007942110449781571",
            "extra": "mean: 12.605523821427767 msec\nrounds: 84"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 76.54170059460543,
            "unit": "iter/sec",
            "range": "stddev: 0.0012206968492575537",
            "extra": "mean: 13.064773740740206 msec\nrounds: 81"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 75.68996288712951,
            "unit": "iter/sec",
            "range": "stddev: 0.0013876264434680731",
            "extra": "mean: 13.211791390243135 msec\nrounds: 82"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 79.53550836339879,
            "unit": "iter/sec",
            "range": "stddev: 0.0004096098481429072",
            "extra": "mean: 12.573000670731702 msec\nrounds: 82"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 76.21178681177585,
            "unit": "iter/sec",
            "range": "stddev: 0.0010932632001178163",
            "extra": "mean: 13.121329939025719 msec\nrounds: 82"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 54.88671957870637,
            "unit": "iter/sec",
            "range": "stddev: 0.0018843886623696585",
            "extra": "mean: 18.219343543860763 msec\nrounds: 57"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 6.355288853498337,
            "unit": "iter/sec",
            "range": "stddev: 0.0022067074598048236",
            "extra": "mean: 157.34926028571294 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 10.989470685010144,
            "unit": "iter/sec",
            "range": "stddev: 0.0015714840013445386",
            "extra": "mean: 90.99619341666927 msec\nrounds: 12"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 14.132924797084096,
            "unit": "iter/sec",
            "range": "stddev: 0.0028592096884537234",
            "extra": "mean: 70.75676226666965 msec\nrounds: 15"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 1.0820597045343494,
            "unit": "iter/sec",
            "range": "stddev: 0.03852452369049857",
            "extra": "mean: 924.1634225999917 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 1.1096722314323932,
            "unit": "iter/sec",
            "range": "stddev: 0.016043021887952345",
            "extra": "mean: 901.1670038000091 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 0.9371877438044767,
            "unit": "iter/sec",
            "range": "stddev: 0.03124328821681993",
            "extra": "mean: 1.0670220631999938 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.11062899854239944,
            "unit": "iter/sec",
            "range": "stddev: 0.1778080032008375",
            "extra": "mean: 9.0392212998 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 0.8036737446776944,
            "unit": "iter/sec",
            "range": "stddev: 0.03285527068429153",
            "extra": "mean: 1.2442860136000093 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.07271941789730345,
            "unit": "iter/sec",
            "range": "stddev: 0.772358244869981",
            "extra": "mean: 13.751485214200011 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 4.511074766367408,
            "unit": "iter/sec",
            "range": "stddev: 0.02561018257575875",
            "extra": "mean: 221.6766628333365 msec\nrounds: 6"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 4.786791926812535,
            "unit": "iter/sec",
            "range": "stddev: 0.01871138715644353",
            "extra": "mean: 208.9081821999912 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 0.9149262406163179,
            "unit": "iter/sec",
            "range": "stddev: 0.24118546814366482",
            "extra": "mean: 1.0929842817999997 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.11172424436694632,
            "unit": "iter/sec",
            "range": "stddev: 0.34662481652388916",
            "extra": "mean: 8.95060875700002 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 0.9004618044117169,
            "unit": "iter/sec",
            "range": "stddev: 0.10192196022652215",
            "extra": "mean: 1.1105412745999956 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.03219707744496503,
            "unit": "iter/sec",
            "range": "stddev: 24.599877162412483",
            "extra": "mean: 31.05871959059998 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "leoningelse@gmail.com",
            "name": "Leon Ingelse",
            "username": "Leoningel"
          },
          "committer": {
            "email": "leoningelse@gmail.com",
            "name": "Leon Ingelse",
            "username": "Leoningel"
          },
          "distinct": true,
          "id": "813919458048214ef1bdfc645058436bba3145e7",
          "message": "Merge branch 'main' of https://github.com/alcides/GeneticEngine",
          "timestamp": "2023-07-21T17:51:04+01:00",
          "tree_id": "79ea67ccf67eb723fd30df16dcb69a026fa5d705",
          "url": "https://github.com/alcides/GeneticEngine/commit/813919458048214ef1bdfc645058436bba3145e7"
        },
        "date": 1689958875065,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 13643.886993263817,
            "unit": "iter/sec",
            "range": "stddev: 0.000017970597608198657",
            "extra": "mean: 73.29289670119039 usec\nrounds: 16612"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 14060.879600779885,
            "unit": "iter/sec",
            "range": "stddev: 0.000017347488264674692",
            "extra": "mean: 71.11930607417584 usec\nrounds: 17731"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 13844.565225853712,
            "unit": "iter/sec",
            "range": "stddev: 0.000019180006066226476",
            "extra": "mean: 72.23050949498747 usec\nrounds: 17272"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 101.69508226376306,
            "unit": "iter/sec",
            "range": "stddev: 0.00016297980504531687",
            "extra": "mean: 9.833317184466543 msec\nrounds: 103"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 102.36342351410896,
            "unit": "iter/sec",
            "range": "stddev: 0.00016183666971755127",
            "extra": "mean: 9.769114451923034 msec\nrounds: 104"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 102.20629062183444,
            "unit": "iter/sec",
            "range": "stddev: 0.00019955976928326066",
            "extra": "mean: 9.784133578431316 msec\nrounds: 102"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 102.20044317418784,
            "unit": "iter/sec",
            "range": "stddev: 0.0002041676034882123",
            "extra": "mean: 9.784693382352808 msec\nrounds: 102"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 101.36019775450526,
            "unit": "iter/sec",
            "range": "stddev: 0.00017271636202888756",
            "extra": "mean: 9.865805534653783 msec\nrounds: 101"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 101.25401525011513,
            "unit": "iter/sec",
            "range": "stddev: 0.00018137659658771604",
            "extra": "mean: 9.876151553395934 msec\nrounds: 103"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 66.99150226191485,
            "unit": "iter/sec",
            "range": "stddev: 0.00008350763921285444",
            "extra": "mean: 14.927266388061092 msec\nrounds: 67"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 7.601412761329188,
            "unit": "iter/sec",
            "range": "stddev: 0.00025107315480538334",
            "extra": "mean: 131.55449274999498 msec\nrounds: 8"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 13.384320200050915,
            "unit": "iter/sec",
            "range": "stddev: 0.00022233093380918562",
            "extra": "mean: 74.71429142857744 msec\nrounds: 14"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 16.868831023222036,
            "unit": "iter/sec",
            "range": "stddev: 0.00011051862485598166",
            "extra": "mean: 59.28093052941108 msec\nrounds: 17"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 1.5319409111627467,
            "unit": "iter/sec",
            "range": "stddev: 0.003474544559779317",
            "extra": "mean: 652.7666913999951 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 1.5285871864753824,
            "unit": "iter/sec",
            "range": "stddev: 0.003187058628075853",
            "extra": "mean: 654.1988634000006 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 1.2044665158576164,
            "unit": "iter/sec",
            "range": "stddev: 0.020462320123621352",
            "extra": "mean: 830.2430883999875 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.1311096417582468,
            "unit": "iter/sec",
            "range": "stddev: 0.029587121293452392",
            "extra": "mean: 7.627204121600005 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 1.0316432496530792,
            "unit": "iter/sec",
            "range": "stddev: 0.007333719182615543",
            "extra": "mean: 969.327333199999 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.09571454208844868,
            "unit": "iter/sec",
            "range": "stddev: 0.5512270444851141",
            "extra": "mean: 10.447733209400008 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 6.172913515813281,
            "unit": "iter/sec",
            "range": "stddev: 0.014507414749835055",
            "extra": "mean: 161.99805771428342 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 6.213958419769583,
            "unit": "iter/sec",
            "range": "stddev: 0.01514682602579763",
            "extra": "mean: 160.9280159999977 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 1.197521487669342,
            "unit": "iter/sec",
            "range": "stddev: 0.18732526019077456",
            "extra": "mean: 835.0580847999936 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.13953497876307167,
            "unit": "iter/sec",
            "range": "stddev: 0.20500387146605611",
            "extra": "mean: 7.166661785200006 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 1.1628330861855087,
            "unit": "iter/sec",
            "range": "stddev: 0.07140064484001551",
            "extra": "mean: 859.9686506000126 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.04557299402735812,
            "unit": "iter/sec",
            "range": "stddev: 21.79807523795773",
            "extra": "mean: 21.942819894599985 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "leoningelse@gmail.com",
            "name": "Leon Ingelse",
            "username": "Leoningel"
          },
          "committer": {
            "email": "leoningelse@gmail.com",
            "name": "Leon Ingelse",
            "username": "Leoningel"
          },
          "distinct": true,
          "id": "9e7915ecf888ca5a4bf7aa7d88f1c62510d9f273",
          "message": "Update depthing_test.py",
          "timestamp": "2023-07-24T14:54:14+01:00",
          "tree_id": "323c7daaf4958c2c62e4d68cc770ed4173e2d0dc",
          "url": "https://github.com/alcides/GeneticEngine/commit/9e7915ecf888ca5a4bf7aa7d88f1c62510d9f273"
        },
        "date": 1690207806991,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 11635.051297829585,
            "unit": "iter/sec",
            "range": "stddev: 0.000021576889840158624",
            "extra": "mean: 85.94719304645791 usec\nrounds: 14266"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 11950.43113058864,
            "unit": "iter/sec",
            "range": "stddev: 0.000020780271331661736",
            "extra": "mean: 83.67898940820415 usec\nrounds: 15106"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 11790.53860183834,
            "unit": "iter/sec",
            "range": "stddev: 0.000022736645038636457",
            "extra": "mean: 84.81376752747185 usec\nrounds: 14948"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 85.20568183454759,
            "unit": "iter/sec",
            "range": "stddev: 0.0002013821286542843",
            "extra": "mean: 11.736306528733612 msec\nrounds: 87"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 85.99771200154197,
            "unit": "iter/sec",
            "range": "stddev: 0.00019404847159194878",
            "extra": "mean: 11.628216341175095 msec\nrounds: 85"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 85.83253531613569,
            "unit": "iter/sec",
            "range": "stddev: 0.0002502089947188753",
            "extra": "mean: 11.650593755815686 msec\nrounds: 86"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 86.33542764071733,
            "unit": "iter/sec",
            "range": "stddev: 0.0002461908108260244",
            "extra": "mean: 11.582730604653683 msec\nrounds: 86"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 85.20779292148032,
            "unit": "iter/sec",
            "range": "stddev: 0.00020207614746026826",
            "extra": "mean: 11.736015752943024 msec\nrounds: 85"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 85.21623143178714,
            "unit": "iter/sec",
            "range": "stddev: 0.00020985425531318188",
            "extra": "mean: 11.734853597703014 msec\nrounds: 87"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 55.18141076405057,
            "unit": "iter/sec",
            "range": "stddev: 0.00012606327375967673",
            "extra": "mean: 18.122044836365028 msec\nrounds: 55"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 6.357969586263747,
            "unit": "iter/sec",
            "range": "stddev: 0.0004893184323465838",
            "extra": "mean: 157.2829165714284 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 11.239284083716504,
            "unit": "iter/sec",
            "range": "stddev: 0.0003692250247319594",
            "extra": "mean: 88.97363858333307 msec\nrounds: 12"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 14.163016389457205,
            "unit": "iter/sec",
            "range": "stddev: 0.000728997273056581",
            "extra": "mean: 70.60642821428839 msec\nrounds: 14"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 1.294552422611792,
            "unit": "iter/sec",
            "range": "stddev: 0.0033235607872062712",
            "extra": "mean: 772.4677522000036 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 1.2893898543255562,
            "unit": "iter/sec",
            "range": "stddev: 0.004691696818485174",
            "extra": "mean: 775.560624000002 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 0.997283075787275,
            "unit": "iter/sec",
            "range": "stddev: 0.021916138607755774",
            "extra": "mean: 1.0027243259999978 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.11072329476467335,
            "unit": "iter/sec",
            "range": "stddev: 0.06089456179024509",
            "extra": "mean: 9.031523150800002 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 0.8672713725447125,
            "unit": "iter/sec",
            "range": "stddev: 0.002660397809007412",
            "extra": "mean: 1.1530416333999824 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.07916832809478348,
            "unit": "iter/sec",
            "range": "stddev: 0.605840603204562",
            "extra": "mean: 12.631313860799992 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 5.297736495021393,
            "unit": "iter/sec",
            "range": "stddev: 0.019236914505064033",
            "extra": "mean: 188.7598601666506 msec\nrounds: 6"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 5.279953315075553,
            "unit": "iter/sec",
            "range": "stddev: 0.01963307684650572",
            "extra": "mean: 189.39561399998675 msec\nrounds: 6"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 1.0084940963889253,
            "unit": "iter/sec",
            "range": "stddev: 0.22497011779336823",
            "extra": "mean: 991.5774455999895 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.11872778483201052,
            "unit": "iter/sec",
            "range": "stddev: 0.17060029426039539",
            "extra": "mean: 8.422628295599997 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 0.9839383714624679,
            "unit": "iter/sec",
            "range": "stddev: 0.0868656734956367",
            "extra": "mean: 1.0163238156000147 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.03248990581014437,
            "unit": "iter/sec",
            "range": "stddev: 20.390882191408465",
            "extra": "mean: 30.778790367799978 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "leoningelse@gmail.com",
            "name": "Leon Ingelse",
            "username": "Leoningel"
          },
          "committer": {
            "email": "leoningelse@gmail.com",
            "name": "Leon Ingelse",
            "username": "Leoningel"
          },
          "distinct": true,
          "id": "01b53e5c3ef20d9453931593bc1e09f0fbc12283",
          "message": "Update operators.py",
          "timestamp": "2023-07-24T15:42:20+01:00",
          "tree_id": "96359a74fa2476d29e8a0e203d9a4c7f1149ba1b",
          "url": "https://github.com/alcides/GeneticEngine/commit/01b53e5c3ef20d9453931593bc1e09f0fbc12283"
        },
        "date": 1690210388317,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 11572.577685541673,
            "unit": "iter/sec",
            "range": "stddev: 0.00003005311942373704",
            "extra": "mean: 86.41117192493431 usec\nrounds: 14105"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 11441.665529154498,
            "unit": "iter/sec",
            "range": "stddev: 0.00006340239363589673",
            "extra": "mean: 87.39986302273046 usec\nrounds: 16667"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 11571.264223960396,
            "unit": "iter/sec",
            "range": "stddev: 0.000046416927110968025",
            "extra": "mean: 86.42098051216556 usec\nrounds: 14881"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 83.39312426405489,
            "unit": "iter/sec",
            "range": "stddev: 0.0010378400212626893",
            "extra": "mean: 11.991396279069882 msec\nrounds: 86"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 83.58667266509747,
            "unit": "iter/sec",
            "range": "stddev: 0.0009832252917883787",
            "extra": "mean: 11.963629704542132 msec\nrounds: 88"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 88.11111002300781,
            "unit": "iter/sec",
            "range": "stddev: 0.00034486387976408954",
            "extra": "mean: 11.349306571428702 msec\nrounds: 91"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 87.94996209218868,
            "unit": "iter/sec",
            "range": "stddev: 0.0003706573448401155",
            "extra": "mean: 11.370101546511245 msec\nrounds: 86"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 86.63287280147844,
            "unit": "iter/sec",
            "range": "stddev: 0.0002458931243097271",
            "extra": "mean: 11.542962476743982 msec\nrounds: 86"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 86.64961508147827,
            "unit": "iter/sec",
            "range": "stddev: 0.0002752274553718226",
            "extra": "mean: 11.540732166665496 msec\nrounds: 90"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 55.408843253526996,
            "unit": "iter/sec",
            "range": "stddev: 0.00024381429484512162",
            "extra": "mean: 18.04766064912113 msec\nrounds: 57"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 6.448126095382623,
            "unit": "iter/sec",
            "range": "stddev: 0.001406046375015576",
            "extra": "mean: 155.08381585714963 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 11.332063260864917,
            "unit": "iter/sec",
            "range": "stddev: 0.0010758278726940565",
            "extra": "mean: 88.24518333333724 msec\nrounds: 12"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 14.254629744089762,
            "unit": "iter/sec",
            "range": "stddev: 0.0006980349016920777",
            "extra": "mean: 70.15264639999639 msec\nrounds: 15"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 1.3138955817182378,
            "unit": "iter/sec",
            "range": "stddev: 0.0039856405515679635",
            "extra": "mean: 761.0954887999981 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 1.3102342755119896,
            "unit": "iter/sec",
            "range": "stddev: 0.006144218959179662",
            "extra": "mean: 763.2222867999985 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 1.0496354279855338,
            "unit": "iter/sec",
            "range": "stddev: 0.03271845247014585",
            "extra": "mean: 952.711744800007 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.11162693139931458,
            "unit": "iter/sec",
            "range": "stddev: 0.05818677646494114",
            "extra": "mean: 8.95841162580001 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 0.8746953674826814,
            "unit": "iter/sec",
            "range": "stddev: 0.01588059572280559",
            "extra": "mean: 1.1432551688000103 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.08046535849938755,
            "unit": "iter/sec",
            "range": "stddev: 0.7113319242243265",
            "extra": "mean: 12.42770825419999 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 5.256717125135665,
            "unit": "iter/sec",
            "range": "stddev: 0.01989430099741682",
            "extra": "mean: 190.2327966666443 msec\nrounds: 6"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 5.261514982067993,
            "unit": "iter/sec",
            "range": "stddev: 0.020028716345611833",
            "extra": "mean: 190.05932766667874 msec\nrounds: 6"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 1.0088151728550696,
            "unit": "iter/sec",
            "range": "stddev: 0.2241670975339597",
            "extra": "mean: 991.2618554000119 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.11795820165722778,
            "unit": "iter/sec",
            "range": "stddev: 0.16577330110960548",
            "extra": "mean: 8.477579226800003 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 0.979135862770899,
            "unit": "iter/sec",
            "range": "stddev: 0.09546043705396158",
            "extra": "mean: 1.0213087254000244 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.03715026670419581,
            "unit": "iter/sec",
            "range": "stddev: 15.071438842283039",
            "extra": "mean: 26.91770715839998 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "leoningelse@gmail.com",
            "name": "Leon Ingelse",
            "username": "Leoningel"
          },
          "committer": {
            "email": "leoningelse@gmail.com",
            "name": "Leon Ingelse",
            "username": "Leoningel"
          },
          "distinct": true,
          "id": "3104088ce0b19b68dce2038757baa32893310530",
          "message": "Update grammar_test.py",
          "timestamp": "2023-07-24T16:00:51+01:00",
          "tree_id": "e6b0c46c65abdd56b2000474d84af7129d68af8a",
          "url": "https://github.com/alcides/GeneticEngine/commit/3104088ce0b19b68dce2038757baa32893310530"
        },
        "date": 1690211603949,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 11781.70495155023,
            "unit": "iter/sec",
            "range": "stddev: 0.00002143473853964149",
            "extra": "mean: 84.87735893169017 usec\nrounds: 15014"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 12219.746280926833,
            "unit": "iter/sec",
            "range": "stddev: 0.00002065925855185846",
            "extra": "mean: 81.83475965952321 usec\nrounds: 15037"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 11874.965282790004,
            "unit": "iter/sec",
            "range": "stddev: 0.000022833145736070587",
            "extra": "mean: 84.21077251057459 usec\nrounds: 14471"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 87.01633148613799,
            "unit": "iter/sec",
            "range": "stddev: 0.0005116341757499342",
            "extra": "mean: 11.49209559770172 msec\nrounds: 87"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 87.42400840303786,
            "unit": "iter/sec",
            "range": "stddev: 0.0002820817039006648",
            "extra": "mean: 11.438505489131192 msec\nrounds: 92"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 87.95741524939928,
            "unit": "iter/sec",
            "range": "stddev: 0.00031882722249556054",
            "extra": "mean: 11.369138089887533 msec\nrounds: 89"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 87.13014184732458,
            "unit": "iter/sec",
            "range": "stddev: 0.0003215871115852534",
            "extra": "mean: 11.477084494505572 msec\nrounds: 91"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 86.77728911979963,
            "unit": "iter/sec",
            "range": "stddev: 0.0003102896219599474",
            "extra": "mean: 11.523752471910694 msec\nrounds: 89"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 86.06644501688677,
            "unit": "iter/sec",
            "range": "stddev: 0.00028417150251539936",
            "extra": "mean: 11.618929999999345 msec\nrounds: 86"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 56.14564961934967,
            "unit": "iter/sec",
            "range": "stddev: 0.00016336318897326873",
            "extra": "mean: 17.810818946431187 msec\nrounds: 56"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 6.447325823740675,
            "unit": "iter/sec",
            "range": "stddev: 0.0002670047543603576",
            "extra": "mean: 155.1030655714263 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 11.338390074522591,
            "unit": "iter/sec",
            "range": "stddev: 0.001611391802743192",
            "extra": "mean: 88.19594258333059 msec\nrounds: 12"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 14.205784949639156,
            "unit": "iter/sec",
            "range": "stddev: 0.0003959284273243149",
            "extra": "mean: 70.39385740000246 msec\nrounds: 15"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 1.2878053688068904,
            "unit": "iter/sec",
            "range": "stddev: 0.004360267646116352",
            "extra": "mean: 776.5148556000099 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 1.2872194914132438,
            "unit": "iter/sec",
            "range": "stddev: 0.0034473094241180132",
            "extra": "mean: 776.8682860000013 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 1.0021225271796468,
            "unit": "iter/sec",
            "range": "stddev: 0.025644268824624325",
            "extra": "mean: 997.8819683999916 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.11096862618922512,
            "unit": "iter/sec",
            "range": "stddev: 0.04496221087175966",
            "extra": "mean: 9.011556097799996 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 0.8794924953567602,
            "unit": "iter/sec",
            "range": "stddev: 0.017876860166675154",
            "extra": "mean: 1.1370193666000035 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.07643995578723356,
            "unit": "iter/sec",
            "range": "stddev: 0.713770798542862",
            "extra": "mean: 13.082163505999995 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 5.243112321925678,
            "unit": "iter/sec",
            "range": "stddev: 0.019205763267357113",
            "extra": "mean: 190.72641183332925 msec\nrounds: 6"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 5.257570881696447,
            "unit": "iter/sec",
            "range": "stddev: 0.01883256203501619",
            "extra": "mean: 190.20190550000393 msec\nrounds: 6"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 1.0118053670118239,
            "unit": "iter/sec",
            "range": "stddev: 0.22026755321846406",
            "extra": "mean: 988.3323735999852 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.11707199314416142,
            "unit": "iter/sec",
            "range": "stddev: 0.24039810292595645",
            "extra": "mean: 8.541752584400001 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 0.9724199019525881,
            "unit": "iter/sec",
            "range": "stddev: 0.08456850983363316",
            "extra": "mean: 1.028362333999985 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.03684032084893485,
            "unit": "iter/sec",
            "range": "stddev: 17.353231157533695",
            "extra": "mean: 27.144171846399992 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "alcides",
            "username": "alcides"
          },
          "committer": {
            "name": "alcides",
            "username": "alcides"
          },
          "id": "877e550922a0320b90fe7cd4ec4b42cd18dbc86d",
          "message": "Phenotype to genotype",
          "timestamp": "2023-07-13T18:18:30Z",
          "url": "https://github.com/alcides/GeneticEngine/pull/128/commits/877e550922a0320b90fe7cd4ec4b42cd18dbc86d"
        },
        "date": 1690372584690,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 13766.498382321262,
            "unit": "iter/sec",
            "range": "stddev: 0.000018149560218393927",
            "extra": "mean: 72.64011313757067 usec\nrounds: 16723"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 14156.034507451275,
            "unit": "iter/sec",
            "range": "stddev: 0.00001754545906907281",
            "extra": "mean: 70.6412519320741 usec\nrounds: 18116"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 13763.406976320024,
            "unit": "iter/sec",
            "range": "stddev: 0.000019512652138031333",
            "extra": "mean: 72.65642887117285 usec\nrounds: 17637"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 101.09579945428614,
            "unit": "iter/sec",
            "range": "stddev: 0.0001689052098803705",
            "extra": "mean: 9.891607815537219 msec\nrounds: 103"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 101.72091681813933,
            "unit": "iter/sec",
            "range": "stddev: 0.00016579535222718174",
            "extra": "mean: 9.830819769230349 msec\nrounds: 104"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 101.22728592877148,
            "unit": "iter/sec",
            "range": "stddev: 0.00020715025627025382",
            "extra": "mean: 9.878759376238234 msec\nrounds: 101"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 101.41885286444314,
            "unit": "iter/sec",
            "range": "stddev: 0.00020924097969382438",
            "extra": "mean: 9.860099693067957 msec\nrounds: 101"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 100.85588208813448,
            "unit": "iter/sec",
            "range": "stddev: 0.0001816268515723935",
            "extra": "mean: 9.915138108912027 msec\nrounds: 101"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 100.69961211946365,
            "unit": "iter/sec",
            "range": "stddev: 0.00018357364414913364",
            "extra": "mean: 9.930524844660406 msec\nrounds: 103"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 65.19681300966859,
            "unit": "iter/sec",
            "range": "stddev: 0.00025740016820340386",
            "extra": "mean: 15.338173046153369 msec\nrounds: 65"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 7.524113110755816,
            "unit": "iter/sec",
            "range": "stddev: 0.00035273237586551826",
            "extra": "mean: 132.90602962500486 msec\nrounds: 8"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 13.032910242276007,
            "unit": "iter/sec",
            "range": "stddev: 0.0002656338228358257",
            "extra": "mean: 76.7288334999969 msec\nrounds: 14"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 16.551370017844086,
            "unit": "iter/sec",
            "range": "stddev: 0.0011312371584050868",
            "extra": "mean: 60.41795929411866 msec\nrounds: 17"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 1.5246534283686854,
            "unit": "iter/sec",
            "range": "stddev: 0.002884527076365713",
            "extra": "mean: 655.8867617999965 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 1.5219838352605168,
            "unit": "iter/sec",
            "range": "stddev: 0.003519496651288821",
            "extra": "mean: 657.0372015999965 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 1.2054198541685304,
            "unit": "iter/sec",
            "range": "stddev: 0.021141151503068494",
            "extra": "mean: 829.5864686000016 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.13187753704713387,
            "unit": "iter/sec",
            "range": "stddev: 0.0695965969899901",
            "extra": "mean: 7.582792508799992 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 1.018400247718451,
            "unit": "iter/sec",
            "range": "stddev: 0.012681590193366593",
            "extra": "mean: 981.9322041999953 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.09428037212563711,
            "unit": "iter/sec",
            "range": "stddev: 0.9059754646918073",
            "extra": "mean: 10.606661571800009 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 6.101997021137665,
            "unit": "iter/sec",
            "range": "stddev: 0.015320398309454652",
            "extra": "mean: 163.8807748571399 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 6.053546027382635,
            "unit": "iter/sec",
            "range": "stddev: 0.015610621728081796",
            "extra": "mean: 165.19243357143003 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 1.1860499739670478,
            "unit": "iter/sec",
            "range": "stddev: 0.18993386109620125",
            "extra": "mean: 843.1347936000066 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.13975998156326622,
            "unit": "iter/sec",
            "range": "stddev: 0.1827867913679825",
            "extra": "mean: 7.155124011999976 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 1.1617695538407804,
            "unit": "iter/sec",
            "range": "stddev: 0.06995625634560894",
            "extra": "mean: 860.7559017999961 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.04142108131647394,
            "unit": "iter/sec",
            "range": "stddev: 10.102536372894608",
            "extra": "mean: 24.142295860399987 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "alcides",
            "username": "alcides"
          },
          "committer": {
            "name": "alcides",
            "username": "alcides"
          },
          "id": "bdad2ef39cb0fc741da78289e0ef28611e027c30",
          "message": "Phenotype to genotype",
          "timestamp": "2023-07-13T18:18:30Z",
          "url": "https://github.com/alcides/GeneticEngine/pull/128/commits/bdad2ef39cb0fc741da78289e0ef28611e027c30"
        },
        "date": 1690372855459,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 12100.311611880657,
            "unit": "iter/sec",
            "range": "stddev: 0.00002165080723005235",
            "extra": "mean: 82.64249980291027 usec\nrounds: 15220"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 12665.05402558786,
            "unit": "iter/sec",
            "range": "stddev: 0.000020732030311551125",
            "extra": "mean: 78.95742078791362 usec\nrounds: 15105"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 12149.181894990514,
            "unit": "iter/sec",
            "range": "stddev: 0.00002288929566642741",
            "extra": "mean: 82.3100689942202 usec\nrounds: 15552"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 89.08430368361059,
            "unit": "iter/sec",
            "range": "stddev: 0.00035757600717657506",
            "extra": "mean: 11.225322067415748 msec\nrounds: 89"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 90.68960906109183,
            "unit": "iter/sec",
            "range": "stddev: 0.00045365322998189056",
            "extra": "mean: 11.02662157608777 msec\nrounds: 92"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 89.03614480225178,
            "unit": "iter/sec",
            "range": "stddev: 0.00036684635351080986",
            "extra": "mean: 11.231393747123576 msec\nrounds: 87"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 88.91473421998975,
            "unit": "iter/sec",
            "range": "stddev: 0.0003765798315832291",
            "extra": "mean: 11.246729901096423 msec\nrounds: 91"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 90.18633229903773,
            "unit": "iter/sec",
            "range": "stddev: 0.00048035103639694374",
            "extra": "mean: 11.088154651685173 msec\nrounds: 89"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 87.92108716676206,
            "unit": "iter/sec",
            "range": "stddev: 0.0003853201466227505",
            "extra": "mean: 11.37383569999852 msec\nrounds: 90"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 58.985306524199935,
            "unit": "iter/sec",
            "range": "stddev: 0.0005123463124195623",
            "extra": "mean: 16.953374644068848 msec\nrounds: 59"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 6.552834066003597,
            "unit": "iter/sec",
            "range": "stddev: 0.002345371750935974",
            "extra": "mean: 152.60572599999836 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 11.703019347686086,
            "unit": "iter/sec",
            "range": "stddev: 0.0015490602107066619",
            "extra": "mean: 85.44803441666697 msec\nrounds: 12"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 14.499666405691775,
            "unit": "iter/sec",
            "range": "stddev: 0.001194140594669656",
            "extra": "mean: 68.96710393333288 msec\nrounds: 15"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 1.3420788163646487,
            "unit": "iter/sec",
            "range": "stddev: 0.0031343984709564206",
            "extra": "mean: 745.1127219999989 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 1.3380313594650555,
            "unit": "iter/sec",
            "range": "stddev: 0.006348747723327211",
            "extra": "mean: 747.3666390000005 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 1.0782442665762353,
            "unit": "iter/sec",
            "range": "stddev: 0.015381604438276613",
            "extra": "mean: 927.4336353999956 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.11499384911056389,
            "unit": "iter/sec",
            "range": "stddev: 0.09350174949587788",
            "extra": "mean: 8.696117294400011 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 0.9075713524747018,
            "unit": "iter/sec",
            "range": "stddev: 0.007841627222984362",
            "extra": "mean: 1.1018417419999764 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.08025694101463363,
            "unit": "iter/sec",
            "range": "stddev: 0.9108606214616869",
            "extra": "mean: 12.459981496399985 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 5.487739478582664,
            "unit": "iter/sec",
            "range": "stddev: 0.018006305610180146",
            "extra": "mean: 182.22439383333722 msec\nrounds: 6"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 5.340750586737925,
            "unit": "iter/sec",
            "range": "stddev: 0.017297283352741593",
            "extra": "mean: 187.2395993333195 msec\nrounds: 6"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 1.0540059885550979,
            "unit": "iter/sec",
            "range": "stddev: 0.2169988612539636",
            "extra": "mean: 948.7612128000023 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.12112793227495018,
            "unit": "iter/sec",
            "range": "stddev: 0.17653302094630505",
            "extra": "mean: 8.25573409220001 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 1.0190928525650804,
            "unit": "iter/sec",
            "range": "stddev: 0.08215552979614932",
            "extra": "mean: 981.2648548000084 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.04190531983672396,
            "unit": "iter/sec",
            "range": "stddev: 6.482931697612284",
            "extra": "mean: 23.863318640600006 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "alcides",
            "username": "alcides"
          },
          "committer": {
            "name": "alcides",
            "username": "alcides"
          },
          "id": "89b961de5311e044b408dc2a16778956bebfeeb8",
          "message": "Phenotype to genotype",
          "timestamp": "2023-07-13T18:18:30Z",
          "url": "https://github.com/alcides/GeneticEngine/pull/128/commits/89b961de5311e044b408dc2a16778956bebfeeb8"
        },
        "date": 1690390490983,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 13657.31307464125,
            "unit": "iter/sec",
            "range": "stddev: 0.00001821373264370862",
            "extra": "mean: 73.22084472507181 usec\nrounds: 16313"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 14062.40710404495,
            "unit": "iter/sec",
            "range": "stddev: 0.000017664490074163094",
            "extra": "mean: 71.1115808695623 usec\nrounds: 17825"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 13709.966056427507,
            "unit": "iter/sec",
            "range": "stddev: 0.000019692363472799127",
            "extra": "mean: 72.93964083384292 usec\nrounds: 17123"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 100.45535267569505,
            "unit": "iter/sec",
            "range": "stddev: 0.00016651053305853644",
            "extra": "mean: 9.95467113861368 msec\nrounds: 101"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 101.37803577415012,
            "unit": "iter/sec",
            "range": "stddev: 0.0001681452764370474",
            "extra": "mean: 9.86406959223198 msec\nrounds: 103"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 101.13642510431292,
            "unit": "iter/sec",
            "range": "stddev: 0.00020263113901630833",
            "extra": "mean: 9.887634440001136 msec\nrounds: 100"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 100.46021416825774,
            "unit": "iter/sec",
            "range": "stddev: 0.00021024867178788529",
            "extra": "mean: 9.95418940999997 msec\nrounds: 100"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 98.00512210639924,
            "unit": "iter/sec",
            "range": "stddev: 0.00039969850930985366",
            "extra": "mean: 10.203548329998 msec\nrounds: 100"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 100.12107214996114,
            "unit": "iter/sec",
            "range": "stddev: 0.0001883354776149342",
            "extra": "mean: 9.987907425743524 msec\nrounds: 101"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 63.86525376661611,
            "unit": "iter/sec",
            "range": "stddev: 0.00004835442779479679",
            "extra": "mean: 15.657966437498505 msec\nrounds: 64"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 7.484998516852461,
            "unit": "iter/sec",
            "range": "stddev: 0.0002039462104026026",
            "extra": "mean: 133.60056087499572 msec\nrounds: 8"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 13.090689303336056,
            "unit": "iter/sec",
            "range": "stddev: 0.0003072073808090869",
            "extra": "mean: 76.39017142857085 msec\nrounds: 14"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 16.53879970939503,
            "unit": "iter/sec",
            "range": "stddev: 0.00015035566513995477",
            "extra": "mean: 60.463879941174945 msec\nrounds: 17"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 1.4627205270200438,
            "unit": "iter/sec",
            "range": "stddev: 0.004754106867315427",
            "extra": "mean: 683.6575965999941 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 1.466252791010363,
            "unit": "iter/sec",
            "range": "stddev: 0.002464490170287501",
            "extra": "mean: 682.0106369999962 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 1.0675637563764921,
            "unit": "iter/sec",
            "range": "stddev: 0.02508844241535467",
            "extra": "mean: 936.7122048000056 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.1267224734622617,
            "unit": "iter/sec",
            "range": "stddev: 0.05943562084277112",
            "extra": "mean: 7.891260110999985 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 0.970319212990952,
            "unit": "iter/sec",
            "range": "stddev: 0.01577555031596779",
            "extra": "mean: 1.0305886831999942 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.09146717723241074,
            "unit": "iter/sec",
            "range": "stddev: 0.576386127010071",
            "extra": "mean: 10.932883579200006 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 6.0646005005373205,
            "unit": "iter/sec",
            "range": "stddev: 0.015538909452882351",
            "extra": "mean: 164.89132299998997 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 6.031525278194668,
            "unit": "iter/sec",
            "range": "stddev: 0.015762678113742285",
            "extra": "mean: 165.79554157142087 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 1.1568742699339447,
            "unit": "iter/sec",
            "range": "stddev: 0.19419525227481865",
            "extra": "mean: 864.3981684000096 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.139005687456318,
            "unit": "iter/sec",
            "range": "stddev: 0.14455911928189427",
            "extra": "mean: 7.193950249800002 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 1.1353640726715932,
            "unit": "iter/sec",
            "range": "stddev: 0.08116855716442661",
            "extra": "mean: 880.7747436000227 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.03746138619676561,
            "unit": "iter/sec",
            "range": "stddev: 9.532139184898046",
            "extra": "mean: 26.69415367459999 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}