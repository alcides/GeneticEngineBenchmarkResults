window.BENCHMARK_DATA = {
  "lastUpdate": 1713821327848,
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
          "id": "57b854c12eb883c77614e69272e28fd2cb20fbb2",
          "message": "Fix bug in mutate_inner_specific type",
          "timestamp": "2023-07-28T11:27:48+01:00",
          "tree_id": "ebd4382483eea2735c15bbee477ed5ccd1a98cd4",
          "url": "https://github.com/alcides/GeneticEngine/commit/57b854c12eb883c77614e69272e28fd2cb20fbb2"
        },
        "date": 1690540647180,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 13464.540378311278,
            "unit": "iter/sec",
            "range": "stddev: 0.000018508978763485793",
            "extra": "mean: 74.26915229953212 usec\nrounds: 16612"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 13804.860067603024,
            "unit": "iter/sec",
            "range": "stddev: 0.000018085356407689244",
            "extra": "mean: 72.43825689669833 usec\nrounds: 17182"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 13162.56684180088,
            "unit": "iter/sec",
            "range": "stddev: 0.000020705060376482303",
            "extra": "mean: 75.9730235005729 usec\nrounds: 16723"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 99.2960027448355,
            "unit": "iter/sec",
            "range": "stddev: 0.00017705100350426316",
            "extra": "mean: 10.070898851484847 msec\nrounds: 101"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 100.06722367472887,
            "unit": "iter/sec",
            "range": "stddev: 0.00017398275799062403",
            "extra": "mean: 9.993282148513746 msec\nrounds: 101"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 98.87035111084155,
            "unit": "iter/sec",
            "range": "stddev: 0.00021498411010483883",
            "extra": "mean: 10.114255575758198 msec\nrounds: 99"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 98.15808624815114,
            "unit": "iter/sec",
            "range": "stddev: 0.00025537536059140777",
            "extra": "mean: 10.187647683675532 msec\nrounds: 98"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 98.85953501810148,
            "unit": "iter/sec",
            "range": "stddev: 0.00017852094052932369",
            "extra": "mean: 10.11536216326424 msec\nrounds: 98"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 99.0712703053399,
            "unit": "iter/sec",
            "range": "stddev: 0.00019354210533530948",
            "extra": "mean: 10.093743594060895 msec\nrounds: 101"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 66.94463358354244,
            "unit": "iter/sec",
            "range": "stddev: 0.00006912796781239017",
            "extra": "mean: 14.937717132353361 msec\nrounds: 68"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 7.830160460473578,
            "unit": "iter/sec",
            "range": "stddev: 0.00014775772257498223",
            "extra": "mean: 127.7113036249986 msec\nrounds: 8"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 13.830137859564362,
            "unit": "iter/sec",
            "range": "stddev: 0.00018351886640919623",
            "extra": "mean: 72.30585914286029 msec\nrounds: 14"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 17.064666159927928,
            "unit": "iter/sec",
            "range": "stddev: 0.0003438680725979303",
            "extra": "mean: 58.600618999992406 msec\nrounds: 18"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 1.4508925494435296,
            "unit": "iter/sec",
            "range": "stddev: 0.0035509362685602897",
            "extra": "mean: 689.2309153999975 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 1.4467722186711567,
            "unit": "iter/sec",
            "range": "stddev: 0.0035469703656403574",
            "extra": "mean: 691.1938086000077 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 1.188477134018696,
            "unit": "iter/sec",
            "range": "stddev: 0.02587173748427573",
            "extra": "mean: 841.4129067999966 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.1400809160276732,
            "unit": "iter/sec",
            "range": "stddev: 0.04175129405516708",
            "extra": "mean: 7.138731158800022 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 1.0190857071818178,
            "unit": "iter/sec",
            "range": "stddev: 0.004285225626007557",
            "extra": "mean: 981.2717349999957 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.09711765932350414,
            "unit": "iter/sec",
            "range": "stddev: 0.39551504735312015",
            "extra": "mean: 10.29678852400001 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 6.264250812641779,
            "unit": "iter/sec",
            "range": "stddev: 0.017014411420625215",
            "extra": "mean: 159.63600914285183 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 6.236791150140357,
            "unit": "iter/sec",
            "range": "stddev: 0.017005180871157627",
            "extra": "mean: 160.33886271428142 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 1.1477142857167018,
            "unit": "iter/sec",
            "range": "stddev: 0.2050698399264791",
            "extra": "mean: 871.2969878000081 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.1536082104838009,
            "unit": "iter/sec",
            "range": "stddev: 0.10084164090200727",
            "extra": "mean: 6.510068679600022 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 1.1324226413703873,
            "unit": "iter/sec",
            "range": "stddev: 0.08261402283933493",
            "extra": "mean: 883.0625275999978 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.05123977370580994,
            "unit": "iter/sec",
            "range": "stddev: 12.895393673515294",
            "extra": "mean: 19.516089312600002 sec\nrounds: 5"
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
          "id": "cc0e5b344ea35b0f23347173713685057a70e337",
          "message": "Update specific_type_mutation_test.py",
          "timestamp": "2023-07-28T11:42:54+01:00",
          "tree_id": "f62309ce8e867cec1137f46ffee3dcd62866f2b5",
          "url": "https://github.com/alcides/GeneticEngine/commit/cc0e5b344ea35b0f23347173713685057a70e337"
        },
        "date": 1690541631428,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 13433.948987511641,
            "unit": "iter/sec",
            "range": "stddev: 0.00001842941219867616",
            "extra": "mean: 74.4382758137322 usec\nrounds: 15699"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 13708.701501667609,
            "unit": "iter/sec",
            "range": "stddev: 0.000020495123915083882",
            "extra": "mean: 72.94636912754677 usec\nrounds: 17731"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 13275.269868451436,
            "unit": "iter/sec",
            "range": "stddev: 0.00001933241927796475",
            "extra": "mean: 75.32803550581608 usec\nrounds: 16448"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 99.65987842198489,
            "unit": "iter/sec",
            "range": "stddev: 0.0001775939547032722",
            "extra": "mean: 10.034128235293942 msec\nrounds: 102"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 100.4579680803532,
            "unit": "iter/sec",
            "range": "stddev: 0.00017404270925294247",
            "extra": "mean: 9.954411970587849 msec\nrounds: 102"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 99.09807330012536,
            "unit": "iter/sec",
            "range": "stddev: 0.00021171027639255564",
            "extra": "mean: 10.09101354545442 msec\nrounds: 99"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 99.13720202123966,
            "unit": "iter/sec",
            "range": "stddev: 0.00021417467893172123",
            "extra": "mean: 10.087030696970395 msec\nrounds: 99"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 99.58166527003273,
            "unit": "iter/sec",
            "range": "stddev: 0.00018595427311977658",
            "extra": "mean: 10.042009212120814 msec\nrounds: 99"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 99.8219985981031,
            "unit": "iter/sec",
            "range": "stddev: 0.00019237327425356064",
            "extra": "mean: 10.01783188118819 msec\nrounds: 101"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 68.64320770784207,
            "unit": "iter/sec",
            "range": "stddev: 0.000021795051145297047",
            "extra": "mean: 14.568083768115576 msec\nrounds: 69"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 7.825019412088136,
            "unit": "iter/sec",
            "range": "stddev: 0.00013191118056478217",
            "extra": "mean: 127.79521012499906 msec\nrounds: 8"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 13.73965098083209,
            "unit": "iter/sec",
            "range": "stddev: 0.0007190888067403807",
            "extra": "mean: 72.78205257142848 msec\nrounds: 14"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 17.37818745983678,
            "unit": "iter/sec",
            "range": "stddev: 0.00023107343491074412",
            "extra": "mean: 57.543400444443826 msec\nrounds: 18"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 1.4603362082342313,
            "unit": "iter/sec",
            "range": "stddev: 0.003452852380238343",
            "extra": "mean: 684.7738174000028 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 1.4515935829366415,
            "unit": "iter/sec",
            "range": "stddev: 0.003672728965070489",
            "extra": "mean: 688.898057800003 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 1.1915819121024869,
            "unit": "iter/sec",
            "range": "stddev: 0.021224599850040965",
            "extra": "mean: 839.2205267999998 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.14350661502124162,
            "unit": "iter/sec",
            "range": "stddev: 0.025533047880245296",
            "extra": "mean: 6.9683198914 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 1.0184623190887796,
            "unit": "iter/sec",
            "range": "stddev: 0.014424403846828993",
            "extra": "mean: 981.8723591999969 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.09151393663437593,
            "unit": "iter/sec",
            "range": "stddev: 0.8291006123413891",
            "extra": "mean: 10.927297379800006 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 6.274772864898207,
            "unit": "iter/sec",
            "range": "stddev: 0.016870603847123404",
            "extra": "mean: 159.36831842856236 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 6.280226821409402,
            "unit": "iter/sec",
            "range": "stddev: 0.01646404752201517",
            "extra": "mean: 159.2299177142747 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 1.1578045357032054,
            "unit": "iter/sec",
            "range": "stddev: 0.19842673788364715",
            "extra": "mean: 863.7036469999998 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.15422351625005806,
            "unit": "iter/sec",
            "range": "stddev: 0.07971885526413465",
            "extra": "mean: 6.484095449999984 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 1.1361863561735945,
            "unit": "iter/sec",
            "range": "stddev: 0.07819876729154028",
            "extra": "mean: 880.1373071999933 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.03430641693605722,
            "unit": "iter/sec",
            "range": "stddev: 5.720671431958077",
            "extra": "mean: 29.149065665000002 sec\nrounds: 5"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d925deb9a7c663ea45bfafa0c6b0f37f8be51e83",
          "message": "Merge pull request #125 from alcides/coevolution\n\nAdded Support for Coevolution",
          "timestamp": "2023-07-28T18:51:33+01:00",
          "tree_id": "100a38bad1540dca93b8dee028bc863a9a02d0ae",
          "url": "https://github.com/alcides/GeneticEngine/commit/d925deb9a7c663ea45bfafa0c6b0f37f8be51e83"
        },
        "date": 1690567257903,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 13746.953837548635,
            "unit": "iter/sec",
            "range": "stddev: 0.000018202481987986282",
            "extra": "mean: 72.7433882311138 usec\nrounds: 16892"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 14146.71093113006,
            "unit": "iter/sec",
            "range": "stddev: 0.0000175860668123084",
            "extra": "mean: 70.68780898035347 usec\nrounds: 17794"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 13731.388379033619,
            "unit": "iter/sec",
            "range": "stddev: 0.00001955306438162628",
            "extra": "mean: 72.8258477873144 usec\nrounds: 17331"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 101.04926155166562,
            "unit": "iter/sec",
            "range": "stddev: 0.00016847466102737116",
            "extra": "mean: 9.8961633627447 msec\nrounds: 102"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 101.56539620075942,
            "unit": "iter/sec",
            "range": "stddev: 0.00017031635906606695",
            "extra": "mean: 9.845873076922263 msec\nrounds: 104"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 101.22053119572566,
            "unit": "iter/sec",
            "range": "stddev: 0.00021104034811218715",
            "extra": "mean: 9.879418613861494 msec\nrounds: 101"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 101.60282847951164,
            "unit": "iter/sec",
            "range": "stddev: 0.00020483072985543496",
            "extra": "mean: 9.842245683166698 msec\nrounds: 101"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 100.9825992843901,
            "unit": "iter/sec",
            "range": "stddev: 0.000178195084876499",
            "extra": "mean: 9.902696178217507 msec\nrounds: 101"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 100.4774996193528,
            "unit": "iter/sec",
            "range": "stddev: 0.00018356442020095386",
            "extra": "mean: 9.952476960397926 msec\nrounds: 101"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 65.5996244536611,
            "unit": "iter/sec",
            "range": "stddev: 0.00036326853804407813",
            "extra": "mean: 15.24398970769093 msec\nrounds: 65"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 7.62169805365755,
            "unit": "iter/sec",
            "range": "stddev: 0.00018079324641869383",
            "extra": "mean: 131.20435800000152 msec\nrounds: 8"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 13.36459844948951,
            "unit": "iter/sec",
            "range": "stddev: 0.000112872544369426",
            "extra": "mean: 74.82454514285816 msec\nrounds: 14"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 16.896430389944143,
            "unit": "iter/sec",
            "range": "stddev: 0.00008999081026195715",
            "extra": "mean: 59.18409847059453 msec\nrounds: 17"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 1.512792233147993,
            "unit": "iter/sec",
            "range": "stddev: 0.0024674190323457626",
            "extra": "mean: 661.0293059999947 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 1.5192540207766394,
            "unit": "iter/sec",
            "range": "stddev: 0.0017466754148081644",
            "extra": "mean: 658.2177741999999 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 1.196930349552898,
            "unit": "iter/sec",
            "range": "stddev: 0.022318983882609653",
            "extra": "mean: 835.470502000004 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.13130899211760183,
            "unit": "iter/sec",
            "range": "stddev: 0.03667598356254744",
            "extra": "mean: 7.615624671799997 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 1.0339781392098388,
            "unit": "iter/sec",
            "range": "stddev: 0.004320883415701859",
            "extra": "mean: 967.1384355999976 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.09130183170265961,
            "unit": "iter/sec",
            "range": "stddev: 0.45998638973549205",
            "extra": "mean: 10.952682781399995 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 6.203995352621749,
            "unit": "iter/sec",
            "range": "stddev: 0.014859683195507538",
            "extra": "mean: 161.1864521428775 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 6.113952930779486,
            "unit": "iter/sec",
            "range": "stddev: 0.015533667777905984",
            "extra": "mean: 163.56030400000267 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 1.1861980418402371,
            "unit": "iter/sec",
            "range": "stddev: 0.18874911483924559",
            "extra": "mean: 843.0295487999842 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.14128317151683964,
            "unit": "iter/sec",
            "range": "stddev: 0.15657290080817324",
            "extra": "mean: 7.077983805600013 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 1.167286991066432,
            "unit": "iter/sec",
            "range": "stddev: 0.07382403831935253",
            "extra": "mean: 856.6873507999958 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.04128280729553243,
            "unit": "iter/sec",
            "range": "stddev: 14.460778613425074",
            "extra": "mean: 24.223158876799992 sec\nrounds: 5"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e9a71bbcbee107576fd98da548c2c6a78c22124b",
          "message": "Merge pull request #127 from alcides/fix_random\n\nAdded tests for randoms",
          "timestamp": "2023-07-28T18:51:06+01:00",
          "tree_id": "67942166cf3f3e820be2b1a375388ba4afd6efa3",
          "url": "https://github.com/alcides/GeneticEngine/commit/e9a71bbcbee107576fd98da548c2c6a78c22124b"
        },
        "date": 1690567266510,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 13765.174462685034,
            "unit": "iter/sec",
            "range": "stddev: 0.00001817385528628244",
            "extra": "mean: 72.6470995853212 usec\nrounds: 16639"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 14140.414109900208,
            "unit": "iter/sec",
            "range": "stddev: 0.000017516215681110602",
            "extra": "mean: 70.71928673573035 usec\nrounds: 17762"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 13798.790496724057,
            "unit": "iter/sec",
            "range": "stddev: 0.000019503046712706426",
            "extra": "mean: 72.47011977154142 usec\nrounds: 16807"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 100.76949144608004,
            "unit": "iter/sec",
            "range": "stddev: 0.0001696198993495975",
            "extra": "mean: 9.923638450979801 msec\nrounds: 102"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 101.39684913601873,
            "unit": "iter/sec",
            "range": "stddev: 0.00017238211078563054",
            "extra": "mean: 9.862239394229606 msec\nrounds: 104"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 101.35711974994537,
            "unit": "iter/sec",
            "range": "stddev: 0.00020763280627154364",
            "extra": "mean: 9.8661051386135 msec\nrounds: 101"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 101.28874057151407,
            "unit": "iter/sec",
            "range": "stddev: 0.00021112787705831654",
            "extra": "mean: 9.872765663365696 msec\nrounds: 101"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 100.64303766373033,
            "unit": "iter/sec",
            "range": "stddev: 0.00017364193487431963",
            "extra": "mean: 9.936107089108454 msec\nrounds: 101"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 100.29816214818399,
            "unit": "iter/sec",
            "range": "stddev: 0.00018604349714380062",
            "extra": "mean: 9.970272421568056 msec\nrounds: 102"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 66.12317795880355,
            "unit": "iter/sec",
            "range": "stddev: 0.00013672571044091213",
            "extra": "mean: 15.123290060605163 msec\nrounds: 66"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 7.674287056885688,
            "unit": "iter/sec",
            "range": "stddev: 0.00014477629434962784",
            "extra": "mean: 130.30526387500174 msec\nrounds: 8"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 13.394545808110225,
            "unit": "iter/sec",
            "range": "stddev: 0.0002705725646968838",
            "extra": "mean: 74.65725335714727 msec\nrounds: 14"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 16.85631386447765,
            "unit": "iter/sec",
            "range": "stddev: 0.00010384696731411174",
            "extra": "mean: 59.32495135293854 msec\nrounds: 17"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 1.5054693549613267,
            "unit": "iter/sec",
            "range": "stddev: 0.002781578926091651",
            "extra": "mean: 664.2446734000032 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 1.5084078910769332,
            "unit": "iter/sec",
            "range": "stddev: 0.0035104136749185147",
            "extra": "mean: 662.9506554000102 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 1.1755464361386119,
            "unit": "iter/sec",
            "range": "stddev: 0.024285636234285896",
            "extra": "mean: 850.6682248000004 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.1308399413503599,
            "unit": "iter/sec",
            "range": "stddev: 0.02506488126162692",
            "extra": "mean: 7.6429260796 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 1.0179758342439877,
            "unit": "iter/sec",
            "range": "stddev: 0.011105886723644782",
            "extra": "mean: 982.3415903999944 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.09603923865001043,
            "unit": "iter/sec",
            "range": "stddev: 0.7283684703732269",
            "extra": "mean: 10.412410740200006 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 6.134049078015222,
            "unit": "iter/sec",
            "range": "stddev: 0.015403941123558161",
            "extra": "mean: 163.02445371427763 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 6.112172299189257,
            "unit": "iter/sec",
            "range": "stddev: 0.015622598685138683",
            "extra": "mean: 163.60795328571547 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 1.1802847163429777,
            "unit": "iter/sec",
            "range": "stddev: 0.19160170805511229",
            "extra": "mean: 847.2531976000027 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.13990673278999002,
            "unit": "iter/sec",
            "range": "stddev: 0.18273577097155957",
            "extra": "mean: 7.1476188461999985 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 1.1520062301971417,
            "unit": "iter/sec",
            "range": "stddev: 0.07216235982777312",
            "extra": "mean: 868.0508610000061 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.03849978915824548,
            "unit": "iter/sec",
            "range": "stddev: 9.570056459210496",
            "extra": "mean: 25.97416821919999 sec\nrounds: 5"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b2d7f257d8426b8e03d6960c88d67121a0c2fbfa",
          "message": "Merge pull request #126 from alcides/string_metahandler\n\nString metahandler",
          "timestamp": "2023-07-28T18:51:22+01:00",
          "tree_id": "f08eb57beb113c8ac71fc50a96b67362f264713d",
          "url": "https://github.com/alcides/GeneticEngine/commit/b2d7f257d8426b8e03d6960c88d67121a0c2fbfa"
        },
        "date": 1690567286773,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 13704.000500854081,
            "unit": "iter/sec",
            "range": "stddev: 0.000018056941947956593",
            "extra": "mean: 72.97139254611648 usec\nrounds: 16421"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 14027.171375650343,
            "unit": "iter/sec",
            "range": "stddev: 0.000017890994455876092",
            "extra": "mean: 71.29021049360615 usec\nrounds: 17668"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 13806.963404469254,
            "unit": "iter/sec",
            "range": "stddev: 0.000019817617634183557",
            "extra": "mean: 72.42722173626566 usec\nrounds: 16921"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 100.69157958116571,
            "unit": "iter/sec",
            "range": "stddev: 0.00017270028768982514",
            "extra": "mean: 9.931317039215951 msec\nrounds: 102"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 101.62927698531358,
            "unit": "iter/sec",
            "range": "stddev: 0.000168591813761118",
            "extra": "mean: 9.839684288460596 msec\nrounds: 104"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 100.9076784549961,
            "unit": "iter/sec",
            "range": "stddev: 0.00020680711826131937",
            "extra": "mean: 9.91004862376247 msec\nrounds: 101"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 100.79503088561643,
            "unit": "iter/sec",
            "range": "stddev: 0.00024977663703855494",
            "extra": "mean: 9.921123999999699 msec\nrounds: 101"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 100.62341275220554,
            "unit": "iter/sec",
            "range": "stddev: 0.0001747854861993445",
            "extra": "mean: 9.938044960396965 msec\nrounds: 101"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 100.57689120045342,
            "unit": "iter/sec",
            "range": "stddev: 0.00018354349345751155",
            "extra": "mean: 9.942641774510244 msec\nrounds: 102"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 66.57736547543529,
            "unit": "iter/sec",
            "range": "stddev: 0.00018851827695636194",
            "extra": "mean: 15.020119718749836 msec\nrounds: 64"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 7.497015934633856,
            "unit": "iter/sec",
            "range": "stddev: 0.0003792438052862226",
            "extra": "mean: 133.38640449999772 msec\nrounds: 8"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 13.189119729886292,
            "unit": "iter/sec",
            "range": "stddev: 0.00012756115197977753",
            "extra": "mean: 75.82007142857451 msec\nrounds: 14"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 16.647137892883972,
            "unit": "iter/sec",
            "range": "stddev: 0.000535634901688093",
            "extra": "mean: 60.07038605882291 msec\nrounds: 17"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 1.5137967496313267,
            "unit": "iter/sec",
            "range": "stddev: 0.0023339137901519265",
            "extra": "mean: 660.5906640000001 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 1.5115321500441126,
            "unit": "iter/sec",
            "range": "stddev: 0.002340497275305548",
            "extra": "mean: 661.5803706000008 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 1.2002724305386334,
            "unit": "iter/sec",
            "range": "stddev: 0.027123286402884996",
            "extra": "mean: 833.1441883999958 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.12673842851588352,
            "unit": "iter/sec",
            "range": "stddev: 0.046086985038287356",
            "extra": "mean: 7.890266683199997 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 1.02824799266003,
            "unit": "iter/sec",
            "range": "stddev: 0.01227853674375328",
            "extra": "mean: 972.528035199997 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.09355108095259929,
            "unit": "iter/sec",
            "range": "stddev: 1.0484276055339845",
            "extra": "mean: 10.689347357799988 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 6.185141026256435,
            "unit": "iter/sec",
            "range": "stddev: 0.014176929425759745",
            "extra": "mean: 161.67780099999618 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 6.126440074877852,
            "unit": "iter/sec",
            "range": "stddev: 0.014970937495273385",
            "extra": "mean: 163.2269291428494 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 1.191611827472945,
            "unit": "iter/sec",
            "range": "stddev: 0.18423923100040815",
            "extra": "mean: 839.1994581999938 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.13867279892220247,
            "unit": "iter/sec",
            "range": "stddev: 0.1807048652962603",
            "extra": "mean: 7.211219559800009 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 1.1635780557668007,
            "unit": "iter/sec",
            "range": "stddev: 0.07249797576566192",
            "extra": "mean: 859.4180640000104 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.043870680216010725,
            "unit": "iter/sec",
            "range": "stddev: 4.285592010199201",
            "extra": "mean: 22.794267038399994 sec\nrounds: 5"
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
          "id": "85b318d4cc5c7efd570928bde906b50a7ab13d7d",
          "message": "Phenotype to genotype",
          "timestamp": "2023-07-13T18:18:30Z",
          "url": "https://github.com/alcides/GeneticEngine/pull/128/commits/85b318d4cc5c7efd570928bde906b50a7ab13d7d"
        },
        "date": 1690792197869,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 10180.088710941694,
            "unit": "iter/sec",
            "range": "stddev: 0.00008400996759880233",
            "extra": "mean: 98.23097110393418 usec\nrounds: 14431"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 10836.891815355155,
            "unit": "iter/sec",
            "range": "stddev: 0.00003068713105131472",
            "extra": "mean: 92.27738147049382 usec\nrounds: 15899"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 10641.280435085871,
            "unit": "iter/sec",
            "range": "stddev: 0.00003285708860462832",
            "extra": "mean: 93.97365346212025 usec\nrounds: 13228"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 77.55982902436021,
            "unit": "iter/sec",
            "range": "stddev: 0.0004585786457340357",
            "extra": "mean: 12.893272362499886 msec\nrounds: 80"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 77.02900121052367,
            "unit": "iter/sec",
            "range": "stddev: 0.0008585200507680541",
            "extra": "mean: 12.98212341176482 msec\nrounds: 85"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 78.08058270226545,
            "unit": "iter/sec",
            "range": "stddev: 0.00043111553389107163",
            "extra": "mean: 12.807281469877987 msec\nrounds: 83"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 78.21581442364726,
            "unit": "iter/sec",
            "range": "stddev: 0.0004565691926646384",
            "extra": "mean: 12.785138240504805 msec\nrounds: 79"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 76.3522781346766,
            "unit": "iter/sec",
            "range": "stddev: 0.0005830471279084511",
            "extra": "mean: 13.097186153844884 msec\nrounds: 78"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 75.61797803438026,
            "unit": "iter/sec",
            "range": "stddev: 0.0008240465953370141",
            "extra": "mean: 13.224368410715012 msec\nrounds: 56"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 56.98132642058446,
            "unit": "iter/sec",
            "range": "stddev: 0.0004853662900663141",
            "extra": "mean: 17.5496090178545 msec\nrounds: 56"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 6.464357888247605,
            "unit": "iter/sec",
            "range": "stddev: 0.0014791854609008696",
            "extra": "mean: 154.6944054285778 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 11.030654973347346,
            "unit": "iter/sec",
            "range": "stddev: 0.0012214257194258886",
            "extra": "mean: 90.65644809090982 msec\nrounds: 11"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 13.970416488198554,
            "unit": "iter/sec",
            "range": "stddev: 0.002503521774149491",
            "extra": "mean: 71.57982733333294 msec\nrounds: 15"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 1.126112061899538,
            "unit": "iter/sec",
            "range": "stddev: 0.015682128009835615",
            "extra": "mean: 888.0110903999991 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 1.116193147690134,
            "unit": "iter/sec",
            "range": "stddev: 0.00424989938410108",
            "extra": "mean: 895.9022925999989 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 0.9118059081654619,
            "unit": "iter/sec",
            "range": "stddev: 0.026971388904980177",
            "extra": "mean: 1.0967246330000022 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.11407155707972536,
            "unit": "iter/sec",
            "range": "stddev: 0.09203266440829941",
            "extra": "mean: 8.766427193600009 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 0.7824002710642738,
            "unit": "iter/sec",
            "range": "stddev: 0.02047512208426111",
            "extra": "mean: 1.278118166599984 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.07312447605200503,
            "unit": "iter/sec",
            "range": "stddev: 1.0295401932975858",
            "extra": "mean: 13.675311660199998 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 4.9987627762200555,
            "unit": "iter/sec",
            "range": "stddev: 0.018680963899682913",
            "extra": "mean: 200.04950120001013 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 4.957248697150182,
            "unit": "iter/sec",
            "range": "stddev: 0.021490532713748425",
            "extra": "mean: 201.72479960000373 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 0.9168293989646581,
            "unit": "iter/sec",
            "range": "stddev: 0.2435723997117579",
            "extra": "mean: 1.0907154604000084 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.10999006186006004,
            "unit": "iter/sec",
            "range": "stddev: 0.25505263896174574",
            "extra": "mean: 9.09173049899996 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 0.8789681537871191,
            "unit": "iter/sec",
            "range": "stddev: 0.09486095162318685",
            "extra": "mean: 1.1376976466000541 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.0291390134551015,
            "unit": "iter/sec",
            "range": "stddev: 12.956439519160343",
            "extra": "mean: 34.318251767199946 sec\nrounds: 5"
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
          "id": "3652fe60b23477be0c2285b521d94b8a8448d234",
          "message": "Phenotype to genotype",
          "timestamp": "2023-07-13T18:18:30Z",
          "url": "https://github.com/alcides/GeneticEngine/pull/128/commits/3652fe60b23477be0c2285b521d94b8a8448d234"
        },
        "date": 1690795446853,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 10324.261954184312,
            "unit": "iter/sec",
            "range": "stddev: 0.00007201838375478731",
            "extra": "mean: 96.85922387844012 usec\nrounds: 13351"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 10382.16593257268,
            "unit": "iter/sec",
            "range": "stddev: 0.000050409272131816286",
            "extra": "mean: 96.31901536678697 usec\nrounds: 14642"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 10087.821581092841,
            "unit": "iter/sec",
            "range": "stddev: 0.00005862791319307262",
            "extra": "mean: 99.12942967530827 usec\nrounds: 13459"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 74.07482510181705,
            "unit": "iter/sec",
            "range": "stddev: 0.0009038320854763423",
            "extra": "mean: 13.499863126581582 msec\nrounds: 79"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 75.28949979659497,
            "unit": "iter/sec",
            "range": "stddev: 0.0006484678672010411",
            "extra": "mean: 13.282064599999188 msec\nrounds: 80"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 72.77057403465835,
            "unit": "iter/sec",
            "range": "stddev: 0.0010153712076129246",
            "extra": "mean: 13.741818217947973 msec\nrounds: 78"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 74.44776065173268,
            "unit": "iter/sec",
            "range": "stddev: 0.0006534904657383105",
            "extra": "mean: 13.432237467531218 msec\nrounds: 77"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 72.6465174680941,
            "unit": "iter/sec",
            "range": "stddev: 0.0009602326712296675",
            "extra": "mean: 13.76528476315735 msec\nrounds: 76"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 74.07445354320026,
            "unit": "iter/sec",
            "range": "stddev: 0.0007858406263439281",
            "extra": "mean: 13.499930842106036 msec\nrounds: 76"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 51.58572448962727,
            "unit": "iter/sec",
            "range": "stddev: 0.0013865816273004228",
            "extra": "mean: 19.385208018181032 msec\nrounds: 55"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 5.838425505887005,
            "unit": "iter/sec",
            "range": "stddev: 0.002409210716028525",
            "extra": "mean: 171.27905442857485 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 10.2637595580407,
            "unit": "iter/sec",
            "range": "stddev: 0.0022208238190236473",
            "extra": "mean: 97.43018572727506 msec\nrounds: 11"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 13.095957577793161,
            "unit": "iter/sec",
            "range": "stddev: 0.0025652717172181313",
            "extra": "mean: 76.35944100000002 msec\nrounds: 14"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 1.0660817022351692,
            "unit": "iter/sec",
            "range": "stddev: 0.006289685543587591",
            "extra": "mean: 938.0144110000003 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 1.075197722124987,
            "unit": "iter/sec",
            "range": "stddev: 0.011587269454569737",
            "extra": "mean: 930.0614941999982 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 0.8525177962041425,
            "unit": "iter/sec",
            "range": "stddev: 0.03744329353576363",
            "extra": "mean: 1.1729960411999911 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.10006761054297005,
            "unit": "iter/sec",
            "range": "stddev: 0.06763302296647669",
            "extra": "mean: 9.993243513800001 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 0.7510195858795898,
            "unit": "iter/sec",
            "range": "stddev: 0.014279481892819428",
            "extra": "mean: 1.3315231969999899 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.06883415074152574,
            "unit": "iter/sec",
            "range": "stddev: 0.6581271317631082",
            "extra": "mean: 14.527672517600013 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 4.7018472696540305,
            "unit": "iter/sec",
            "range": "stddev: 0.018700918161924637",
            "extra": "mean: 212.68236560001696 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 4.592003416920773,
            "unit": "iter/sec",
            "range": "stddev: 0.019385274378543534",
            "extra": "mean: 217.76987279999958 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 0.8617127523339694,
            "unit": "iter/sec",
            "range": "stddev: 0.25750096516341264",
            "extra": "mean: 1.1604795185999932 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.107755289924875,
            "unit": "iter/sec",
            "range": "stddev: 0.20048865589561732",
            "extra": "mean: 9.280286849000003 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 0.8579292316939281,
            "unit": "iter/sec",
            "range": "stddev: 0.12653642325245654",
            "extra": "mean: 1.1655973046000099 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.03526769150979712,
            "unit": "iter/sec",
            "range": "stddev: 16.08451097394136",
            "extra": "mean: 28.35456354500002 sec\nrounds: 5"
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
          "id": "ab68550797686448117f284ce2156fb02280d570",
          "message": "Added another test for metahandler and grammatical evolution",
          "timestamp": "2023-09-05T11:00:59+01:00",
          "tree_id": "3e203d8109a3b500574aa7a79b0f474bd2ff53c7",
          "url": "https://github.com/alcides/GeneticEngine/commit/ab68550797686448117f284ce2156fb02280d570"
        },
        "date": 1693908715212,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 13798.010586443479,
            "unit": "iter/sec",
            "range": "stddev: 0.00001796578482710084",
            "extra": "mean: 72.47421602810613 usec\nrounds: 16234"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 14154.833411013069,
            "unit": "iter/sec",
            "range": "stddev: 0.00001738213348680793",
            "extra": "mean: 70.64724613586458 usec\nrounds: 17921"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 13783.863404923715,
            "unit": "iter/sec",
            "range": "stddev: 0.000019493788938945384",
            "extra": "mean: 72.54860053552123 usec\nrounds: 17183"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 101.72105213560263,
            "unit": "iter/sec",
            "range": "stddev: 0.000167733917977258",
            "extra": "mean: 9.83080669148916 msec\nrounds: 94"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 102.63135545024328,
            "unit": "iter/sec",
            "range": "stddev: 0.00016774161674771828",
            "extra": "mean: 9.743610961903453 msec\nrounds: 105"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 101.83337839327196,
            "unit": "iter/sec",
            "range": "stddev: 0.0002077449324663453",
            "extra": "mean: 9.819962921568642 msec\nrounds: 102"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 102.32685150814332,
            "unit": "iter/sec",
            "range": "stddev: 0.00020717524333932374",
            "extra": "mean: 9.772605970588456 msec\nrounds: 102"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 101.44935875029363,
            "unit": "iter/sec",
            "range": "stddev: 0.00017133699761145196",
            "extra": "mean: 9.8571347549016 msec\nrounds: 102"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 101.43499696280803,
            "unit": "iter/sec",
            "range": "stddev: 0.0001820917976903698",
            "extra": "mean: 9.858530388349676 msec\nrounds: 103"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 67.58770425758192,
            "unit": "iter/sec",
            "range": "stddev: 0.000028868872725558184",
            "extra": "mean: 14.795590573529815 msec\nrounds: 68"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 7.717064353825667,
            "unit": "iter/sec",
            "range": "stddev: 0.0013382731080491797",
            "extra": "mean: 129.58295462500047 msec\nrounds: 8"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 13.685317911372021,
            "unit": "iter/sec",
            "range": "stddev: 0.00032323450096190465",
            "extra": "mean: 73.07100985714295 msec\nrounds: 14"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 17.036097533415038,
            "unit": "iter/sec",
            "range": "stddev: 0.00031581197804363923",
            "extra": "mean: 58.69888911111095 msec\nrounds: 18"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 1.5090334249319113,
            "unit": "iter/sec",
            "range": "stddev: 0.0030888228064186365",
            "extra": "mean: 662.6758450000011 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 1.5101612039276107,
            "unit": "iter/sec",
            "range": "stddev: 0.0031100619452157216",
            "extra": "mean: 662.1809628000051 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 1.2158165676496222,
            "unit": "iter/sec",
            "range": "stddev: 0.022462216595750154",
            "extra": "mean: 822.4924931999965 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.13518652121985542,
            "unit": "iter/sec",
            "range": "stddev: 0.05366694669917667",
            "extra": "mean: 7.397187167600004 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 1.0397567965432635,
            "unit": "iter/sec",
            "range": "stddev: 0.010756200249323077",
            "extra": "mean: 961.7633694000006 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.09070110622421838,
            "unit": "iter/sec",
            "range": "stddev: 0.2728285364344371",
            "extra": "mean: 11.025223854799986 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 6.180010760140065,
            "unit": "iter/sec",
            "range": "stddev: 0.014912838416203262",
            "extra": "mean: 161.81201600000708 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 6.104207292873365,
            "unit": "iter/sec",
            "range": "stddev: 0.015741642810366538",
            "extra": "mean: 163.82143528570785 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 1.1963205212844086,
            "unit": "iter/sec",
            "range": "stddev: 0.18759451961762494",
            "extra": "mean: 835.8963857999925 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.1391311039204659,
            "unit": "iter/sec",
            "range": "stddev: 0.1585572059019129",
            "extra": "mean: 7.1874654323999945 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 1.163841725514883,
            "unit": "iter/sec",
            "range": "stddev: 0.0749315173996262",
            "extra": "mean: 859.2233617999909 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.03392056621154342,
            "unit": "iter/sec",
            "range": "stddev: 15.467764131354501",
            "extra": "mean: 29.480639968199956 sec\nrounds: 5"
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
          "id": "b4fd5aa69ca11c5db951ec63169b5c343d30c939",
          "message": "Fixed ruff warnings",
          "timestamp": "2023-09-05T11:11:38+01:00",
          "tree_id": "0aecb8ae0bf8a3e0d75d7bec1e53c1cd82f3211c",
          "url": "https://github.com/alcides/GeneticEngine/commit/b4fd5aa69ca11c5db951ec63169b5c343d30c939"
        },
        "date": 1693909443329,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 10363.983762766766,
            "unit": "iter/sec",
            "range": "stddev: 0.00004178990276131786",
            "extra": "mean: 96.4879936991565 usec\nrounds: 14125"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 10693.898388531587,
            "unit": "iter/sec",
            "range": "stddev: 0.00004828745016256731",
            "extra": "mean: 93.51126817068189 usec\nrounds: 16001"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 10309.998313894623,
            "unit": "iter/sec",
            "range": "stddev: 0.00004870044045463849",
            "extra": "mean: 96.99322633761403 usec\nrounds: 15362"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 76.1032917583321,
            "unit": "iter/sec",
            "range": "stddev: 0.0014170512325820442",
            "extra": "mean: 13.140036086422187 msec\nrounds: 81"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 75.97223775793248,
            "unit": "iter/sec",
            "range": "stddev: 0.0013702497853033547",
            "extra": "mean: 13.16270297560884 msec\nrounds: 82"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 75.45590295874256,
            "unit": "iter/sec",
            "range": "stddev: 0.0007167482070287047",
            "extra": "mean: 13.252773617284463 msec\nrounds: 81"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 74.90276462055498,
            "unit": "iter/sec",
            "range": "stddev: 0.0018789591110939306",
            "extra": "mean: 13.35064206329145 msec\nrounds: 79"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 75.47660379263829,
            "unit": "iter/sec",
            "range": "stddev: 0.0009394345434354246",
            "extra": "mean: 13.249138802632986 msec\nrounds: 76"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 74.20811923638553,
            "unit": "iter/sec",
            "range": "stddev: 0.0011400187125317769",
            "extra": "mean: 13.475614397591185 msec\nrounds: 83"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 56.73393498707399,
            "unit": "iter/sec",
            "range": "stddev: 0.0011920558142306634",
            "extra": "mean: 17.62613504999848 msec\nrounds: 60"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 6.373660590478149,
            "unit": "iter/sec",
            "range": "stddev: 0.003228990622420636",
            "extra": "mean: 156.89570942857196 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 11.00536731305296,
            "unit": "iter/sec",
            "range": "stddev: 0.004980165529614837",
            "extra": "mean: 90.86475458333372 msec\nrounds: 12"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 14.771051976310549,
            "unit": "iter/sec",
            "range": "stddev: 0.0022594552144174084",
            "extra": "mean: 67.69998518749887 msec\nrounds: 16"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 1.1664587264242947,
            "unit": "iter/sec",
            "range": "stddev: 0.01366040945863621",
            "extra": "mean: 857.2956567999938 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 1.1299613156116324,
            "unit": "iter/sec",
            "range": "stddev: 0.031185377507819106",
            "extra": "mean: 884.9860488000104 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 0.9564867140508063,
            "unit": "iter/sec",
            "range": "stddev: 0.027514085075652808",
            "extra": "mean: 1.0454928284000005 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.10705105943102802,
            "unit": "iter/sec",
            "range": "stddev: 0.15706582340338235",
            "extra": "mean: 9.341336791200002 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 0.8131465961213795,
            "unit": "iter/sec",
            "range": "stddev: 0.029511938571459857",
            "extra": "mean: 1.2297905504000028 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.07596172045051143,
            "unit": "iter/sec",
            "range": "stddev: 1.0962769058106174",
            "extra": "mean: 13.164525422400004 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 4.877405565689335,
            "unit": "iter/sec",
            "range": "stddev: 0.01936404536784582",
            "extra": "mean: 205.02703466667072 msec\nrounds: 6"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 4.873376416980588,
            "unit": "iter/sec",
            "range": "stddev: 0.02353329722827982",
            "extra": "mean: 205.19654433333776 msec\nrounds: 6"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 0.9397253822961197,
            "unit": "iter/sec",
            "range": "stddev: 0.23907373548198205",
            "extra": "mean: 1.0641406722000055 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.11082312759215276,
            "unit": "iter/sec",
            "range": "stddev: 0.20437969381087695",
            "extra": "mean: 9.023387281399994 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 0.8756494171591345,
            "unit": "iter/sec",
            "range": "stddev: 0.09631959254662326",
            "extra": "mean: 1.1420095535999963 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.04231818790934979,
            "unit": "iter/sec",
            "range": "stddev: 10.758716252468284",
            "extra": "mean: 23.630501432200028 sec\nrounds: 5"
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
          "id": "59155d04aa64ecf49a41adc2257a26f30db1a386",
          "message": "Refactor Tree",
          "timestamp": "2023-09-08T18:22:53Z",
          "url": "https://github.com/alcides/GeneticEngine/pull/131/commits/59155d04aa64ecf49a41adc2257a26f30db1a386"
        },
        "date": 1694613841220,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 10222.210551342456,
            "unit": "iter/sec",
            "range": "stddev: 0.00009450279860011332",
            "extra": "mean: 97.82619864630675 usec\nrounds: 16104"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 10430.148190388118,
            "unit": "iter/sec",
            "range": "stddev: 0.00010915399307167324",
            "extra": "mean: 95.87591487161687 usec\nrounds: 17362"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 10158.518974748733,
            "unit": "iter/sec",
            "range": "stddev: 0.00007539338996049968",
            "extra": "mean: 98.43954640294744 usec\nrounds: 13038"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 80.11336093982545,
            "unit": "iter/sec",
            "range": "stddev: 0.0006073325545345087",
            "extra": "mean: 12.482312416665646 msec\nrounds: 84"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 77.46437844074147,
            "unit": "iter/sec",
            "range": "stddev: 0.0016213411042881702",
            "extra": "mean: 12.909159282352958 msec\nrounds: 85"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 78.19873640033511,
            "unit": "iter/sec",
            "range": "stddev: 0.001128072478167315",
            "extra": "mean: 12.787930419751829 msec\nrounds: 81"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 79.86342061288278,
            "unit": "iter/sec",
            "range": "stddev: 0.0008551688982637055",
            "extra": "mean: 12.521377024999225 msec\nrounds: 80"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 80.28464672614254,
            "unit": "iter/sec",
            "range": "stddev: 0.0007182092425989752",
            "extra": "mean: 12.455681637500149 msec\nrounds: 80"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 78.98899968338532,
            "unit": "iter/sec",
            "range": "stddev: 0.0009022191656134751",
            "extra": "mean: 12.659990682352465 msec\nrounds: 85"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 58.073198130280815,
            "unit": "iter/sec",
            "range": "stddev: 0.0011768200288144624",
            "extra": "mean: 17.219647482761502 msec\nrounds: 58"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 6.111687336999991,
            "unit": "iter/sec",
            "range": "stddev: 0.0033962204097020827",
            "extra": "mean: 163.62093557142998 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 10.22586018209054,
            "unit": "iter/sec",
            "range": "stddev: 0.002460583914936801",
            "extra": "mean: 97.79128427272936 msec\nrounds: 11"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 13.586739600686247,
            "unit": "iter/sec",
            "range": "stddev: 0.0035006041836169247",
            "extra": "mean: 73.6011750714271 msec\nrounds: 14"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 1.148050308145882,
            "unit": "iter/sec",
            "range": "stddev: 0.012102272649110459",
            "extra": "mean: 871.0419681999952 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 1.1110431192225925,
            "unit": "iter/sec",
            "range": "stddev: 0.02304921809600215",
            "extra": "mean: 900.0550767999982 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 0.9449749055932105,
            "unit": "iter/sec",
            "range": "stddev: 0.0570998189903266",
            "extra": "mean: 1.0582291594000026 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.11019058512386422,
            "unit": "iter/sec",
            "range": "stddev: 0.35767673469166633",
            "extra": "mean: 9.075185496800014 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 0.767592669200462,
            "unit": "iter/sec",
            "range": "stddev: 0.074095608004617",
            "extra": "mean: 1.3027742970000191 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.07245453170464619,
            "unit": "iter/sec",
            "range": "stddev: 0.9770184338896446",
            "extra": "mean: 13.801759206399982 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 5.370303096550539,
            "unit": "iter/sec",
            "range": "stddev: 0.02824315431779583",
            "extra": "mean: 186.2092291666594 msec\nrounds: 6"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 5.345700109227926,
            "unit": "iter/sec",
            "range": "stddev: 0.0227297908682611",
            "extra": "mean: 187.06623633334138 msec\nrounds: 6"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 0.951324883366251,
            "unit": "iter/sec",
            "range": "stddev: 0.26664536709989284",
            "extra": "mean: 1.0511656085999903 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.11202800058999499,
            "unit": "iter/sec",
            "range": "stddev: 0.1328813877489475",
            "extra": "mean: 8.926339796599995 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 0.8960355542549673,
            "unit": "iter/sec",
            "range": "stddev: 0.11291858405905066",
            "extra": "mean: 1.1160271433999924 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.03910125887756304,
            "unit": "iter/sec",
            "range": "stddev: 8.590277103449292",
            "extra": "mean: 25.574624160600024 sec\nrounds: 5"
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
          "id": "70310199dc54ab775b352e94174f65b3edb9cd66",
          "message": "Added test for custom mutation",
          "timestamp": "2023-09-13T15:16:38+01:00",
          "tree_id": "afc5752cd31fd75737c7ea9bde1fd5048f098fe0",
          "url": "https://github.com/alcides/GeneticEngine/commit/70310199dc54ab775b352e94174f65b3edb9cd66"
        },
        "date": 1694615300708,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 10846.206513824574,
            "unit": "iter/sec",
            "range": "stddev: 0.00009566176072525557",
            "extra": "mean: 92.19813385679132 usec\nrounds: 14904"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 11231.364900386823,
            "unit": "iter/sec",
            "range": "stddev: 0.00006507036538523819",
            "extra": "mean: 89.03637348347205 usec\nrounds: 16978"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 10904.442967902269,
            "unit": "iter/sec",
            "range": "stddev: 0.00004265089496363253",
            "extra": "mean: 91.70573893077768 usec\nrounds: 15674"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 81.98626869283979,
            "unit": "iter/sec",
            "range": "stddev: 0.0006711750152634192",
            "extra": "mean: 12.197164426966223 msec\nrounds: 89"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 84.9458444899133,
            "unit": "iter/sec",
            "range": "stddev: 0.0007693544769663292",
            "extra": "mean: 11.77220623333426 msec\nrounds: 90"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 85.72953702740138,
            "unit": "iter/sec",
            "range": "stddev: 0.0007650516913421563",
            "extra": "mean: 11.664591162791117 msec\nrounds: 86"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 85.05051192429548,
            "unit": "iter/sec",
            "range": "stddev: 0.0006881247123709542",
            "extra": "mean: 11.75771876470435 msec\nrounds: 85"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 85.69028939398315,
            "unit": "iter/sec",
            "range": "stddev: 0.0007104869031070595",
            "extra": "mean: 11.6699337471279 msec\nrounds: 87"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 80.9729348216695,
            "unit": "iter/sec",
            "range": "stddev: 0.0008704104634544499",
            "extra": "mean: 12.349805551723513 msec\nrounds: 87"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 57.32263112295866,
            "unit": "iter/sec",
            "range": "stddev: 0.0014635494188490476",
            "extra": "mean: 17.445116883329582 msec\nrounds: 60"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 6.44329829295312,
            "unit": "iter/sec",
            "range": "stddev: 0.0057383985449777275",
            "extra": "mean: 155.2000162857082 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 10.743254266330071,
            "unit": "iter/sec",
            "range": "stddev: 0.0034909731511577435",
            "extra": "mean: 93.08166550000152 msec\nrounds: 12"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 14.169091449263597,
            "unit": "iter/sec",
            "range": "stddev: 0.0034623822440934668",
            "extra": "mean: 70.57615539999726 msec\nrounds: 15"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 1.217966265891363,
            "unit": "iter/sec",
            "range": "stddev: 0.017045324390292386",
            "extra": "mean: 821.0408022000138 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 1.203494817721593,
            "unit": "iter/sec",
            "range": "stddev: 0.025343949094742888",
            "extra": "mean: 830.913424199997 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 0.9863197636186852,
            "unit": "iter/sec",
            "range": "stddev: 0.03748939629160267",
            "extra": "mean: 1.0138699809999991 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.11620497715782037,
            "unit": "iter/sec",
            "range": "stddev: 0.059901836322551485",
            "extra": "mean: 8.605483383400003 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 0.8607705465748767,
            "unit": "iter/sec",
            "range": "stddev: 0.0400341719667158",
            "extra": "mean: 1.1617497879999916 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.08070601962479589,
            "unit": "iter/sec",
            "range": "stddev: 1.0500775236937365",
            "extra": "mean: 12.390649478800004 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 5.286446341727527,
            "unit": "iter/sec",
            "range": "stddev: 0.02345139895076137",
            "extra": "mean: 189.16299066665943 msec\nrounds: 6"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 5.291515077621118,
            "unit": "iter/sec",
            "range": "stddev: 0.019363152286702517",
            "extra": "mean: 188.98179166666296 msec\nrounds: 6"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 1.0204453393385438,
            "unit": "iter/sec",
            "range": "stddev: 0.24667221259800115",
            "extra": "mean: 979.9642973999994 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.12473097838603518,
            "unit": "iter/sec",
            "range": "stddev: 0.1174390544056112",
            "extra": "mean: 8.017254517999993 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 0.986263999093326,
            "unit": "iter/sec",
            "range": "stddev: 0.0876886192399178",
            "extra": "mean: 1.0139273064000123 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.05096001917554185,
            "unit": "iter/sec",
            "range": "stddev: 16.20505553668698",
            "extra": "mean: 19.62322652499997 sec\nrounds: 5"
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
          "id": "c653a19337928eacc733996809cc458ca8f35bda",
          "message": "Bump mypy from 1.4.1 to 1.5.1",
          "timestamp": "2023-09-08T18:22:53Z",
          "url": "https://github.com/alcides/GeneticEngine/pull/130/commits/c653a19337928eacc733996809cc458ca8f35bda"
        },
        "date": 1694615999911,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 13757.133341253937,
            "unit": "iter/sec",
            "range": "stddev: 0.000017942611474830417",
            "extra": "mean: 72.68956222160539 usec\nrounds: 16835"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 14080.308560946396,
            "unit": "iter/sec",
            "range": "stddev: 0.000017386453545913106",
            "extra": "mean: 71.02117085513542 usec\nrounds: 17986"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 13714.657017559815,
            "unit": "iter/sec",
            "range": "stddev: 0.00001944194959008153",
            "extra": "mean: 72.914692559911 usec\nrounds: 17392"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 100.93660892360555,
            "unit": "iter/sec",
            "range": "stddev: 0.0001674449471524472",
            "extra": "mean: 9.907208203882258 msec\nrounds: 103"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 101.48034848663137,
            "unit": "iter/sec",
            "range": "stddev: 0.0001845397431623321",
            "extra": "mean: 9.854124615385373 msec\nrounds: 104"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 101.51625247610856,
            "unit": "iter/sec",
            "range": "stddev: 0.00020647653581667237",
            "extra": "mean: 9.850639435644513 msec\nrounds: 101"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 101.34001530998985,
            "unit": "iter/sec",
            "range": "stddev: 0.00020286893980844798",
            "extra": "mean: 9.86777036633645 msec\nrounds: 101"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 100.64830573240607,
            "unit": "iter/sec",
            "range": "stddev: 0.0001694538442315389",
            "extra": "mean: 9.935587019802426 msec\nrounds: 101"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 100.39676891661883,
            "unit": "iter/sec",
            "range": "stddev: 0.0001815655050974043",
            "extra": "mean: 9.960479911764057 msec\nrounds: 102"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 68.0255497182478,
            "unit": "iter/sec",
            "range": "stddev: 0.000044421262587268864",
            "extra": "mean: 14.700358970149574 msec\nrounds: 67"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 7.673351496418657,
            "unit": "iter/sec",
            "range": "stddev: 0.0001918822382689971",
            "extra": "mean: 130.3211511249973 msec\nrounds: 8"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 13.375703702817772,
            "unit": "iter/sec",
            "range": "stddev: 0.00013178867580264063",
            "extra": "mean: 74.76242164285806 msec\nrounds: 14"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 17.035121663338437,
            "unit": "iter/sec",
            "range": "stddev: 0.00010589917233657156",
            "extra": "mean: 58.702251722223764 msec\nrounds: 18"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 1.5014005816827605,
            "unit": "iter/sec",
            "range": "stddev: 0.003596522530622158",
            "extra": "mean: 666.044766600001 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 1.4983211560168,
            "unit": "iter/sec",
            "range": "stddev: 0.0010418261873852551",
            "extra": "mean: 667.4136556000065 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 1.2095994626204378,
            "unit": "iter/sec",
            "range": "stddev: 0.020213026797873068",
            "extra": "mean: 826.7199440000013 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.13329469168918257,
            "unit": "iter/sec",
            "range": "stddev: 0.05545522932724701",
            "extra": "mean: 7.502174222600002 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 1.0215724460463154,
            "unit": "iter/sec",
            "range": "stddev: 0.014959000138850263",
            "extra": "mean: 978.8830972000028 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.08959905580291358,
            "unit": "iter/sec",
            "range": "stddev: 0.30273806876005915",
            "extra": "mean: 11.160831897599996 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 6.127631526678083,
            "unit": "iter/sec",
            "range": "stddev: 0.014901155864237358",
            "extra": "mean: 163.19519142857482 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 6.055831595787516,
            "unit": "iter/sec",
            "range": "stddev: 0.01625678938083801",
            "extra": "mean: 165.13008728571776 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 1.1971546788982523,
            "unit": "iter/sec",
            "range": "stddev: 0.1867366717219697",
            "extra": "mean: 835.313946999986 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.1452631666099153,
            "unit": "iter/sec",
            "range": "stddev: 0.13971256995488202",
            "extra": "mean: 6.884057557999995 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 1.1674716824443272,
            "unit": "iter/sec",
            "range": "stddev: 0.06928905488811254",
            "extra": "mean: 856.5518247999876 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.03844145537077069,
            "unit": "iter/sec",
            "range": "stddev: 13.890649482224225",
            "extra": "mean: 26.013583261999987 sec\nrounds: 5"
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
          "id": "805fc269b08d0fa93035adf5deb3f8b7d75d8090",
          "message": "Merge branch 'dependabot/pip/mypy-1.5.1'",
          "timestamp": "2023-09-13T15:30:26+01:00",
          "tree_id": "0c28c8a9694d81f4727cf9cd2ca367caf21d3117",
          "url": "https://github.com/alcides/GeneticEngine/commit/805fc269b08d0fa93035adf5deb3f8b7d75d8090"
        },
        "date": 1694616007375,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 13823.758265159435,
            "unit": "iter/sec",
            "range": "stddev: 0.00001799083453153463",
            "extra": "mean: 72.33922793053605 usec\nrounds: 16584"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 14206.973291121063,
            "unit": "iter/sec",
            "range": "stddev: 0.00001734649998770736",
            "extra": "mean: 70.38796930975933 usec\nrounds: 17921"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 13773.089734085259,
            "unit": "iter/sec",
            "range": "stddev: 0.000019467291279313964",
            "extra": "mean: 72.60534994738528 usec\nrounds: 17094"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 101.7309223969407,
            "unit": "iter/sec",
            "range": "stddev: 0.0001658832386161439",
            "extra": "mean: 9.829852875000302 msec\nrounds: 104"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 102.68219556435736,
            "unit": "iter/sec",
            "range": "stddev: 0.00016490113466648872",
            "extra": "mean: 9.7387866952381 msec\nrounds: 105"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 102.30364950816713,
            "unit": "iter/sec",
            "range": "stddev: 0.0001958611488982266",
            "extra": "mean: 9.774822352942238 msec\nrounds: 102"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 102.25446155688535,
            "unit": "iter/sec",
            "range": "stddev: 0.00020201810118080786",
            "extra": "mean: 9.779524382353609 msec\nrounds: 102"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 101.38677391505539,
            "unit": "iter/sec",
            "range": "stddev: 0.00017273293139404431",
            "extra": "mean: 9.86321944554452 msec\nrounds: 101"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 101.50999208283376,
            "unit": "iter/sec",
            "range": "stddev: 0.00018020956324200254",
            "extra": "mean: 9.851246950979803 msec\nrounds: 102"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 68.36985885292917,
            "unit": "iter/sec",
            "range": "stddev: 0.00009091647803527867",
            "extra": "mean: 14.626328279411931 msec\nrounds: 68"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 7.708555555934433,
            "unit": "iter/sec",
            "range": "stddev: 0.0002883153686283305",
            "extra": "mean: 129.72598987499674 msec\nrounds: 8"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 13.501689031401002,
            "unit": "iter/sec",
            "range": "stddev: 0.00026300904790449317",
            "extra": "mean: 74.06480757142982 msec\nrounds: 14"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 16.95743622460846,
            "unit": "iter/sec",
            "range": "stddev: 0.00024415326869897517",
            "extra": "mean: 58.971178588235524 msec\nrounds: 17"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 1.5113904383655177,
            "unit": "iter/sec",
            "range": "stddev: 0.003068714321677137",
            "extra": "mean: 661.6424020000039 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 1.516049594447881,
            "unit": "iter/sec",
            "range": "stddev: 0.0016424677911434549",
            "extra": "mean: 659.6090284000127 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 1.2243316239661828,
            "unit": "iter/sec",
            "range": "stddev: 0.018444372053031795",
            "extra": "mean: 816.7721721999897 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.13228686739414372,
            "unit": "iter/sec",
            "range": "stddev: 0.019259579994578904",
            "extra": "mean: 7.559329355199997 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 1.03868631986491,
            "unit": "iter/sec",
            "range": "stddev: 0.003864964700836172",
            "extra": "mean: 962.7545687999998 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.09292534912498723,
            "unit": "iter/sec",
            "range": "stddev: 0.34741484365507525",
            "extra": "mean: 10.761326262600011 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 6.240183834246935,
            "unit": "iter/sec",
            "range": "stddev: 0.014565794618224017",
            "extra": "mean: 160.2516891428536 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 6.2303862489954245,
            "unit": "iter/sec",
            "range": "stddev: 0.014505331499134947",
            "extra": "mean: 160.50369271427402 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 1.2028439282604377,
            "unit": "iter/sec",
            "range": "stddev: 0.18299579799442525",
            "extra": "mean: 831.3630526000225 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.14605922734152274,
            "unit": "iter/sec",
            "range": "stddev: 0.023829954141539267",
            "extra": "mean: 6.846537655999998 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 1.1651334670324696,
            "unit": "iter/sec",
            "range": "stddev: 0.07497781538884922",
            "extra": "mean: 858.2707718000279 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.04682690828726187,
            "unit": "iter/sec",
            "range": "stddev: 11.431268074282913",
            "extra": "mean: 21.355242884399992 sec\nrounds: 5"
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
          "id": "fb08bc9450de70e2675ceb1f1bab8dd334f8253f",
          "message": "Callbacks fixed",
          "timestamp": "2023-09-08T18:22:53Z",
          "url": "https://github.com/alcides/GeneticEngine/pull/132/commits/fb08bc9450de70e2675ceb1f1bab8dd334f8253f"
        },
        "date": 1694616450489,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 13683.887126387746,
            "unit": "iter/sec",
            "range": "stddev: 0.000018153450087312754",
            "extra": "mean: 73.07865014989923 usec\nrounds: 16367"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 13964.031875653252,
            "unit": "iter/sec",
            "range": "stddev: 0.00001854346700990707",
            "extra": "mean: 71.61255494865583 usec\nrounds: 17762"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 13649.292993154782,
            "unit": "iter/sec",
            "range": "stddev: 0.000019451777020621355",
            "extra": "mean: 73.26386798946342 usec\nrounds: 16529"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 100.59391791805538,
            "unit": "iter/sec",
            "range": "stddev: 0.00018344362750105105",
            "extra": "mean: 9.940958864079715 msec\nrounds: 103"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 100.86896843755974,
            "unit": "iter/sec",
            "range": "stddev: 0.00028026824547566277",
            "extra": "mean: 9.91385175728275 msec\nrounds: 103"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 100.92565331932644,
            "unit": "iter/sec",
            "range": "stddev: 0.0002085825837382811",
            "extra": "mean: 9.908283643565062 msec\nrounds: 101"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 100.10854740058294,
            "unit": "iter/sec",
            "range": "stddev: 0.00027624662813082",
            "extra": "mean: 9.989157029704108 msec\nrounds: 101"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 100.43712573821614,
            "unit": "iter/sec",
            "range": "stddev: 0.00017113888271413224",
            "extra": "mean: 9.956477673469522 msec\nrounds: 98"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 100.4308204001852,
            "unit": "iter/sec",
            "range": "stddev: 0.00019049218253550261",
            "extra": "mean: 9.957102769999437 msec\nrounds: 100"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 67.79902835737295,
            "unit": "iter/sec",
            "range": "stddev: 0.00004851990995385743",
            "extra": "mean: 14.749473911763706 msec\nrounds: 68"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 7.638737833511883,
            "unit": "iter/sec",
            "range": "stddev: 0.00019148667167202815",
            "extra": "mean: 130.91167962499028 msec\nrounds: 8"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 13.485286829642627,
            "unit": "iter/sec",
            "range": "stddev: 0.0003596602175938766",
            "extra": "mean: 74.15489285714371 msec\nrounds: 14"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 17.03895403926981,
            "unit": "iter/sec",
            "range": "stddev: 0.00035724430296830447",
            "extra": "mean: 58.68904850000137 msec\nrounds: 18"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 1.4997909844790405,
            "unit": "iter/sec",
            "range": "stddev: 0.0032371918516588996",
            "extra": "mean: 666.7595754000047 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 1.498972241973844,
            "unit": "iter/sec",
            "range": "stddev: 0.0037387353724118787",
            "extra": "mean: 667.1237612000084 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 1.2068183612550656,
            "unit": "iter/sec",
            "range": "stddev: 0.0218647684388756",
            "extra": "mean: 828.625112200001 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.13586018171275022,
            "unit": "iter/sec",
            "range": "stddev: 0.05381857126365338",
            "extra": "mean: 7.360508335799994 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 1.0255787110577994,
            "unit": "iter/sec",
            "range": "stddev: 0.009599995650485244",
            "extra": "mean: 975.0592413999925 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.09346210928512391,
            "unit": "iter/sec",
            "range": "stddev: 0.47736919701731234",
            "extra": "mean: 10.699523129199985 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 6.13272462431866,
            "unit": "iter/sec",
            "range": "stddev: 0.013862973168138268",
            "extra": "mean: 163.05966128572078 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 6.039954890061859,
            "unit": "iter/sec",
            "range": "stddev: 0.014675823711540666",
            "extra": "mean: 165.56415042857356 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 1.2039676501559027,
            "unit": "iter/sec",
            "range": "stddev: 0.1836734664464829",
            "extra": "mean: 830.5871008000167 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.14386379565921767,
            "unit": "iter/sec",
            "range": "stddev: 0.15918871347583807",
            "extra": "mean: 6.9510191595999915 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 1.1630346771957036,
            "unit": "iter/sec",
            "range": "stddev: 0.0743356603187725",
            "extra": "mean: 859.8195905999887 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.0425410307657008,
            "unit": "iter/sec",
            "range": "stddev: 12.806728077401205",
            "extra": "mean: 23.506717679400037 sec\nrounds: 5"
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
          "id": "e6b91f50a2560fb3bcece0648338f572d34158e3",
          "message": "Explores using JAX PyTrees",
          "timestamp": "2023-09-08T18:22:53Z",
          "url": "https://github.com/alcides/GeneticEngine/pull/133/commits/e6b91f50a2560fb3bcece0648338f572d34158e3"
        },
        "date": 1694616586500,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 13063.188900970252,
            "unit": "iter/sec",
            "range": "stddev: 0.00004190766736704685",
            "extra": "mean: 76.55098671395055 usec\nrounds: 17763"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 13061.943117948666,
            "unit": "iter/sec",
            "range": "stddev: 0.00004839504753173666",
            "extra": "mean: 76.55828776546124 usec\nrounds: 18317"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 13000.106790087846,
            "unit": "iter/sec",
            "range": "stddev: 0.00003293743709433216",
            "extra": "mean: 76.92244503425673 usec\nrounds: 18084"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 95.94538826497862,
            "unit": "iter/sec",
            "range": "stddev: 0.0010057616227101532",
            "extra": "mean: 10.422595792079498 msec\nrounds: 101"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 96.48853912647922,
            "unit": "iter/sec",
            "range": "stddev: 0.0009961321257070067",
            "extra": "mean: 10.363925177571387 msec\nrounds: 107"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 90.40140158855901,
            "unit": "iter/sec",
            "range": "stddev: 0.0014155308509577315",
            "extra": "mean: 11.06177539759027 msec\nrounds: 83"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 90.95792980478872,
            "unit": "iter/sec",
            "range": "stddev: 0.0009735190928174521",
            "extra": "mean: 10.994093666667338 msec\nrounds: 99"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 94.90723878271059,
            "unit": "iter/sec",
            "range": "stddev: 0.000722163875894479",
            "extra": "mean: 10.536604086538567 msec\nrounds: 104"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 92.27338452388967,
            "unit": "iter/sec",
            "range": "stddev: 0.0009573346298603931",
            "extra": "mean: 10.83736122999909 msec\nrounds: 100"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 67.26836748751825,
            "unit": "iter/sec",
            "range": "stddev: 0.001197453143147241",
            "extra": "mean: 14.865828283785117 msec\nrounds: 74"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 7.898975543244358,
            "unit": "iter/sec",
            "range": "stddev: 0.006829294444030642",
            "extra": "mean: 126.59869555555916 msec\nrounds: 9"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 13.69918067783673,
            "unit": "iter/sec",
            "range": "stddev: 0.0038524278262945817",
            "extra": "mean: 72.99706628571252 msec\nrounds: 14"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 18.33060348037031,
            "unit": "iter/sec",
            "range": "stddev: 0.002667876228814921",
            "extra": "mean: 54.55357763157496 msec\nrounds: 19"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 1.3368683930351515,
            "unit": "iter/sec",
            "range": "stddev: 0.022605407344856016",
            "extra": "mean: 748.0167869999946 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 1.325526725688303,
            "unit": "iter/sec",
            "range": "stddev: 0.0059136890961500365",
            "extra": "mean: 754.4170786000052 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 1.1744495054391548,
            "unit": "iter/sec",
            "range": "stddev: 0.013754020879784402",
            "extra": "mean: 851.4627451999957 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.13824863227241685,
            "unit": "iter/sec",
            "range": "stddev: 0.11217088249803747",
            "extra": "mean: 7.233344616600005 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 0.9791867716109797,
            "unit": "iter/sec",
            "range": "stddev: 0.01715349558088421",
            "extra": "mean: 1.021255626599998 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.08552538204034497,
            "unit": "iter/sec",
            "range": "stddev: 0.8623827353119321",
            "extra": "mean: 11.692435346600018 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 5.954816837047477,
            "unit": "iter/sec",
            "range": "stddev: 0.011423116892934064",
            "extra": "mean: 167.93127771429843 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 6.0301303560845705,
            "unit": "iter/sec",
            "range": "stddev: 0.011873067006050755",
            "extra": "mean: 165.8338942857134 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 1.029845139109256,
            "unit": "iter/sec",
            "range": "stddev: 0.34153222625200613",
            "extra": "mean: 971.0197795999989 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.14210898574421207,
            "unit": "iter/sec",
            "range": "stddev: 0.14962859833307798",
            "extra": "mean: 7.0368526998000105 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 1.1041913254075368,
            "unit": "iter/sec",
            "range": "stddev: 0.08472634522959419",
            "extra": "mean: 905.6401521999987 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.03530174519845861,
            "unit": "iter/sec",
            "range": "stddev: 12.206776953339082",
            "extra": "mean: 28.32721142759999 sec\nrounds: 5"
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
          "id": "aa3022c21f48b2665da7530c71c6acc127f6d22f",
          "message": "Release 0.8.1",
          "timestamp": "2023-10-17T11:07:09+01:00",
          "tree_id": "64adec7becd3f0d2ed85f311702da0a6e0374f88",
          "url": "https://github.com/alcides/GeneticEngine/commit/aa3022c21f48b2665da7530c71c6acc127f6d22f"
        },
        "date": 1697537927329,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 11734.65634417886,
            "unit": "iter/sec",
            "range": "stddev: 0.000037488399185508404",
            "extra": "mean: 85.21766387271016 usec\nrounds: 15152"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 12119.531776533253,
            "unit": "iter/sec",
            "range": "stddev: 0.00006063323798620724",
            "extra": "mean: 82.51143843166244 usec\nrounds: 17241"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 11699.310845244436,
            "unit": "iter/sec",
            "range": "stddev: 0.00004654358845548048",
            "extra": "mean: 85.47512013551486 usec\nrounds: 15649"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 87.10035173439397,
            "unit": "iter/sec",
            "range": "stddev: 0.0005393235604047421",
            "extra": "mean: 11.481009893615878 msec\nrounds: 94"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 85.28202549108849,
            "unit": "iter/sec",
            "range": "stddev: 0.0010640301195981284",
            "extra": "mean: 11.725800298967977 msec\nrounds: 97"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 87.14605236257115,
            "unit": "iter/sec",
            "range": "stddev: 0.0006080412974166298",
            "extra": "mean: 11.474989088886092 msec\nrounds: 90"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 87.46141940132321,
            "unit": "iter/sec",
            "range": "stddev: 0.0004908141460757224",
            "extra": "mean: 11.433612749999241 msec\nrounds: 92"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 86.2469476019409,
            "unit": "iter/sec",
            "range": "stddev: 0.0005984978987229889",
            "extra": "mean: 11.594613233332515 msec\nrounds: 90"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 86.05277145062465,
            "unit": "iter/sec",
            "range": "stddev: 0.0006850395990712638",
            "extra": "mean: 11.620776218390363 msec\nrounds: 87"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 64.03909054952987,
            "unit": "iter/sec",
            "range": "stddev: 0.0003816566850485287",
            "extra": "mean: 15.615462234376487 msec\nrounds: 64"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 7.178523212417966,
            "unit": "iter/sec",
            "range": "stddev: 0.003321891617459459",
            "extra": "mean: 139.30441824999917 msec\nrounds: 8"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 12.522650910762502,
            "unit": "iter/sec",
            "range": "stddev: 0.0006418430633070807",
            "extra": "mean: 79.85529638461432 msec\nrounds: 13"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 16.11494664799605,
            "unit": "iter/sec",
            "range": "stddev: 0.0012278601500602102",
            "extra": "mean: 62.0541924117604 msec\nrounds: 17"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 1.2783907785422695,
            "unit": "iter/sec",
            "range": "stddev: 0.01728886577696532",
            "extra": "mean: 782.2334272000035 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 1.2761817530579478,
            "unit": "iter/sec",
            "range": "stddev: 0.006563040799426693",
            "extra": "mean: 783.5874455999942 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 1.0616990753321005,
            "unit": "iter/sec",
            "range": "stddev: 0.02592073573145138",
            "extra": "mean: 941.8864754000083 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.12855222052892926,
            "unit": "iter/sec",
            "range": "stddev: 0.11316170464679662",
            "extra": "mean: 7.7789399194 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 0.9061143000562627,
            "unit": "iter/sec",
            "range": "stddev: 0.016193410430210435",
            "extra": "mean: 1.1036135285999875 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.07210156760791686,
            "unit": "iter/sec",
            "range": "stddev: 0.7573282048921252",
            "extra": "mean: 13.869323971400012 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 5.115710032684305,
            "unit": "iter/sec",
            "range": "stddev: 0.018725440611639985",
            "extra": "mean: 195.47628650001533 msec\nrounds: 6"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 5.043663270333018,
            "unit": "iter/sec",
            "range": "stddev: 0.02104298917552544",
            "extra": "mean: 198.26858899998948 msec\nrounds: 6"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 0.940008076556912,
            "unit": "iter/sec",
            "range": "stddev: 0.24705658086281762",
            "extra": "mean: 1.0638206468000022 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.11299176977772399,
            "unit": "iter/sec",
            "range": "stddev: 0.12459580897207981",
            "extra": "mean: 8.850202116200034 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 0.8871436919324137,
            "unit": "iter/sec",
            "range": "stddev: 0.09631728580801409",
            "extra": "mean: 1.1272131099999796 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.05424380612135151,
            "unit": "iter/sec",
            "range": "stddev: 7.535090777358428",
            "extra": "mean: 18.435284532999958 sec\nrounds: 5"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "908dd608063c5a63900fa7894a741a2dce075042",
          "message": "Merge pull request #140 from alcides/dependabot/pip/mypy-1.6.1\n\nBump mypy from 1.5.1 to 1.6.1",
          "timestamp": "2023-10-25T11:17:27+01:00",
          "tree_id": "465685a90e5ae6cfc963c084bfd424b8d4d18d79",
          "url": "https://github.com/alcides/GeneticEngine/commit/908dd608063c5a63900fa7894a741a2dce075042"
        },
        "date": 1698229682019,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 13849.6016112974,
            "unit": "iter/sec",
            "range": "stddev: 0.00001923452450370237",
            "extra": "mean: 72.20424298589786 usec\nrounds: 16182"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 14206.6164514665,
            "unit": "iter/sec",
            "range": "stddev: 0.000017467767494765645",
            "extra": "mean: 70.38973730418219 usec\nrounds: 18116"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 13921.648538926169,
            "unit": "iter/sec",
            "range": "stddev: 0.000019119406206574492",
            "extra": "mean: 71.83057359937733 usec\nrounds: 17242"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 102.26363951693956,
            "unit": "iter/sec",
            "range": "stddev: 0.00016448393494650776",
            "extra": "mean: 9.778646689318679 msec\nrounds: 103"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 102.73577813871688,
            "unit": "iter/sec",
            "range": "stddev: 0.00016839554870948857",
            "extra": "mean: 9.73370736190629 msec\nrounds: 105"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 102.37872233866455,
            "unit": "iter/sec",
            "range": "stddev: 0.00027896674481096546",
            "extra": "mean: 9.767654617646444 msec\nrounds: 102"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 102.58236418477098,
            "unit": "iter/sec",
            "range": "stddev: 0.00020435603475548223",
            "extra": "mean: 9.748264313725542 msec\nrounds: 102"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 101.78688990822974,
            "unit": "iter/sec",
            "range": "stddev: 0.0001710170917749987",
            "extra": "mean: 9.824447931374975 msec\nrounds: 102"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 101.57333726799293,
            "unit": "iter/sec",
            "range": "stddev: 0.0001849674695966523",
            "extra": "mean: 9.84510332038793 msec\nrounds: 103"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 63.86011483607069,
            "unit": "iter/sec",
            "range": "stddev: 0.00011261871611755826",
            "extra": "mean: 15.659226460318871 msec\nrounds: 63"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 7.377444041390652,
            "unit": "iter/sec",
            "range": "stddev: 0.00007641920729797012",
            "extra": "mean: 135.54830025000086 msec\nrounds: 8"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 12.900581885013496,
            "unit": "iter/sec",
            "range": "stddev: 0.00014256956078110918",
            "extra": "mean: 77.51588330768956 msec\nrounds: 13"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 16.145550519580013,
            "unit": "iter/sec",
            "range": "stddev: 0.00021277353557247052",
            "extra": "mean: 61.936568764705875 msec\nrounds: 17"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 1.5067063775083345,
            "unit": "iter/sec",
            "range": "stddev: 0.005661358237802537",
            "extra": "mean: 663.699321200005 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 1.5203480796304472,
            "unit": "iter/sec",
            "range": "stddev: 0.003348179573641534",
            "extra": "mean: 657.7441136000061 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 1.209625230074286,
            "unit": "iter/sec",
            "range": "stddev: 0.017564856453125326",
            "extra": "mean: 826.7023332000008 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.1295479031867259,
            "unit": "iter/sec",
            "range": "stddev: 0.041631280668881554",
            "extra": "mean: 7.719152339800007 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 1.0396723336235396,
            "unit": "iter/sec",
            "range": "stddev: 0.0026914835921517974",
            "extra": "mean: 961.8415030000165 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.09173593139898549,
            "unit": "iter/sec",
            "range": "stddev: 0.7058605118096704",
            "extra": "mean: 10.90085405740001 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 6.218759567145441,
            "unit": "iter/sec",
            "range": "stddev: 0.014562917537543772",
            "extra": "mean: 160.80377271427844 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 6.158646665971692,
            "unit": "iter/sec",
            "range": "stddev: 0.015602106768691159",
            "extra": "mean: 162.37333528570323 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 1.2051524875417476,
            "unit": "iter/sec",
            "range": "stddev: 0.1883225596270449",
            "extra": "mean: 829.7705147999864 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.14078494292231938,
            "unit": "iter/sec",
            "range": "stddev: 0.14067617363153564",
            "extra": "mean: 7.103032321799981 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 1.1645893883804959,
            "unit": "iter/sec",
            "range": "stddev: 0.0727065745733689",
            "extra": "mean: 858.6717430000135 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.0390718531087193,
            "unit": "iter/sec",
            "range": "stddev: 12.064873418601044",
            "extra": "mean: 25.59387181400002 sec\nrounds: 5"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ae852057570cfe1738be4c04db4ee857b3beb588",
          "message": "Merge pull request #141 from alcides/dependabot/pip/mypy-1.7.0\n\nBump mypy from 1.6.1 to 1.7.0",
          "timestamp": "2023-11-14T10:46:54Z",
          "tree_id": "21277ac189a71716a1e382c7c03ece0dc8037553",
          "url": "https://github.com/alcides/GeneticEngine/commit/ae852057570cfe1738be4c04db4ee857b3beb588"
        },
        "date": 1699959505483,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 9937.55532423812,
            "unit": "iter/sec",
            "range": "stddev: 0.00009329708954243632",
            "extra": "mean: 100.62837059744035 usec\nrounds: 14992"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 10669.528500567763,
            "unit": "iter/sec",
            "range": "stddev: 0.00006176426516684738",
            "extra": "mean: 93.72485390959746 usec\nrounds: 15552"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 10566.685816082083,
            "unit": "iter/sec",
            "range": "stddev: 0.00006779808085308267",
            "extra": "mean: 94.63705246900018 usec\nrounds: 15552"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 74.15728657806562,
            "unit": "iter/sec",
            "range": "stddev: 0.001258350823179555",
            "extra": "mean: 13.484851538456665 msec\nrounds: 78"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 76.77218407775864,
            "unit": "iter/sec",
            "range": "stddev: 0.0012312414482635646",
            "extra": "mean: 13.025551011902317 msec\nrounds: 84"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 81.32995962849127,
            "unit": "iter/sec",
            "range": "stddev: 0.0007409021620275617",
            "extra": "mean: 12.295591988092946 msec\nrounds: 84"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 76.24560203196143,
            "unit": "iter/sec",
            "range": "stddev: 0.0008139446981631891",
            "extra": "mean: 13.115510578312565 msec\nrounds: 83"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 74.52115911702055,
            "unit": "iter/sec",
            "range": "stddev: 0.0011433692073637332",
            "extra": "mean: 13.419007592591258 msec\nrounds: 81"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 78.37100787729952,
            "unit": "iter/sec",
            "range": "stddev: 0.0009449350452937488",
            "extra": "mean: 12.75982059035959 msec\nrounds: 83"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 56.97178458560026,
            "unit": "iter/sec",
            "range": "stddev: 0.0010921062115773058",
            "extra": "mean: 17.55254828813546 msec\nrounds: 59"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 6.352046068130709,
            "unit": "iter/sec",
            "range": "stddev: 0.001880467261987442",
            "extra": "mean: 157.42958871428365 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 11.068944775660277,
            "unit": "iter/sec",
            "range": "stddev: 0.001889599114051509",
            "extra": "mean: 90.34284841667291 msec\nrounds: 12"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 14.47778886130927,
            "unit": "iter/sec",
            "range": "stddev: 0.003210087879020157",
            "extra": "mean: 69.07132087500045 msec\nrounds: 16"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 1.1540220620504684,
            "unit": "iter/sec",
            "range": "stddev: 0.016544834499397112",
            "extra": "mean: 866.5345602000002 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 1.1317774234522122,
            "unit": "iter/sec",
            "range": "stddev: 0.021862503666439145",
            "extra": "mean: 883.5659550000059 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 0.9542608203866211,
            "unit": "iter/sec",
            "range": "stddev: 0.04634705712277618",
            "extra": "mean: 1.0479315284000108 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.10680077848326332,
            "unit": "iter/sec",
            "range": "stddev: 0.13550247294572265",
            "extra": "mean: 9.363227629999994 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 0.7706291018188488,
            "unit": "iter/sec",
            "range": "stddev: 0.01488151888406545",
            "extra": "mean: 1.2976411060000033 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.07101849037717985,
            "unit": "iter/sec",
            "range": "stddev: 0.43417707409383316",
            "extra": "mean: 14.08083999940003 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 4.710146553901787,
            "unit": "iter/sec",
            "range": "stddev: 0.021241877617506642",
            "extra": "mean: 212.30761900001198 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 4.554118018045312,
            "unit": "iter/sec",
            "range": "stddev: 0.046310435068797694",
            "extra": "mean: 219.58148559997426 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 0.9170972592065261,
            "unit": "iter/sec",
            "range": "stddev: 0.2531110546368136",
            "extra": "mean: 1.0903968908000023 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.11884561094593658,
            "unit": "iter/sec",
            "range": "stddev: 0.2539885217601051",
            "extra": "mean: 8.414277919400025 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 0.9152790084550624,
            "unit": "iter/sec",
            "range": "stddev: 0.09538958588168987",
            "extra": "mean: 1.0925630226000067 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.03957720221200613,
            "unit": "iter/sec",
            "range": "stddev: 16.21894190969898",
            "extra": "mean: 25.267071549 sec\nrounds: 5"
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
          "id": "66dce2784a7f167348f2c2a2a46133818a76c64f",
          "message": "support to unknown length of objectives added",
          "timestamp": "2023-11-17T18:32:22Z",
          "url": "https://github.com/alcides/GeneticEngine/pull/142/commits/66dce2784a7f167348f2c2a2a46133818a76c64f"
        },
        "date": 1700653349793,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 17322.035547220632,
            "unit": "iter/sec",
            "range": "stddev: 0.000015271112262169064",
            "extra": "mean: 57.72993579616875 usec\nrounds: 19734"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 17618.971594583058,
            "unit": "iter/sec",
            "range": "stddev: 0.000016354234836710417",
            "extra": "mean: 56.75700165765915 usec\nrounds: 22320"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 17285.00272358301,
            "unit": "iter/sec",
            "range": "stddev: 0.00001595706868380911",
            "extra": "mean: 57.85362119935553 usec\nrounds: 21246"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 129.7427725535802,
            "unit": "iter/sec",
            "range": "stddev: 0.00018963186707316717",
            "extra": "mean: 7.707558427480247 msec\nrounds: 131"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 131.4359284245883,
            "unit": "iter/sec",
            "range": "stddev: 0.00015385136324035076",
            "extra": "mean: 7.608269762964794 msec\nrounds: 135"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 128.9126750544548,
            "unit": "iter/sec",
            "range": "stddev: 0.00017292193465708521",
            "extra": "mean: 7.757189117187924 msec\nrounds: 128"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 125.51850409204803,
            "unit": "iter/sec",
            "range": "stddev: 0.0007377131152828818",
            "extra": "mean: 7.9669528188979815 msec\nrounds: 127"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 128.68915578098552,
            "unit": "iter/sec",
            "range": "stddev: 0.00015740124443403288",
            "extra": "mean: 7.770662523436611 msec\nrounds: 128"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 129.06469600203474,
            "unit": "iter/sec",
            "range": "stddev: 0.0001705923635017396",
            "extra": "mean: 7.748052186046561 msec\nrounds: 129"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 87.5808294668674,
            "unit": "iter/sec",
            "range": "stddev: 0.000050229152395118656",
            "extra": "mean: 11.418023853933798 msec\nrounds: 89"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 10.055176391003478,
            "unit": "iter/sec",
            "range": "stddev: 0.001043182512981548",
            "extra": "mean: 99.45126381817784 msec\nrounds: 11"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 17.833857836505683,
            "unit": "iter/sec",
            "range": "stddev: 0.0006216172689654428",
            "extra": "mean: 56.07311716666333 msec\nrounds: 18"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 22.598226581571353,
            "unit": "iter/sec",
            "range": "stddev: 0.00022098741624180642",
            "extra": "mean: 44.25125999999889 msec\nrounds: 23"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 1.8487612003790765,
            "unit": "iter/sec",
            "range": "stddev: 0.006959741056176759",
            "extra": "mean: 540.9027406000064 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 1.8509310725987913,
            "unit": "iter/sec",
            "range": "stddev: 0.004797124942507792",
            "extra": "mean: 540.2686328000073 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 1.5448053085546227,
            "unit": "iter/sec",
            "range": "stddev: 0.01661187028193978",
            "extra": "mean: 647.3307636000015 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.18582546389633559,
            "unit": "iter/sec",
            "range": "stddev: 0.042241953733837226",
            "extra": "mean: 5.381393803799995 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 1.3023879879993474,
            "unit": "iter/sec",
            "range": "stddev: 0.011577686885386504",
            "extra": "mean: 767.8203493999831 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.11809619925973379,
            "unit": "iter/sec",
            "range": "stddev: 0.4703923413976048",
            "extra": "mean: 8.467673018000005 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 7.69253819477709,
            "unit": "iter/sec",
            "range": "stddev: 0.011676168420283815",
            "extra": "mean: 129.99610462499334 msec\nrounds: 8"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 7.6209945218564785,
            "unit": "iter/sec",
            "range": "stddev: 0.012653397791447933",
            "extra": "mean: 131.21647012500404 msec\nrounds: 8"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 1.5148915730702504,
            "unit": "iter/sec",
            "range": "stddev: 0.1531568633982567",
            "extra": "mean: 660.1132502000041 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.187196954560437,
            "unit": "iter/sec",
            "range": "stddev: 0.11929763438363204",
            "extra": "mean: 5.341967246999991 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 1.47591448161613,
            "unit": "iter/sec",
            "range": "stddev: 0.055183704534529185",
            "extra": "mean: 677.5460316000135 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.05173959272365247,
            "unit": "iter/sec",
            "range": "stddev: 10.38507970708364",
            "extra": "mean: 19.3275584008 sec\nrounds: 5"
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
          "id": "1d27627ad20742f567928ae1201572d8823963d3",
          "message": "Support to unknown length of objectives added",
          "timestamp": "2023-11-17T18:32:22Z",
          "url": "https://github.com/alcides/GeneticEngine/pull/142/commits/1d27627ad20742f567928ae1201572d8823963d3"
        },
        "date": 1700663837787,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 17403.096609135577,
            "unit": "iter/sec",
            "range": "stddev: 0.000015039527280403194",
            "extra": "mean: 57.461038254253 usec\nrounds: 20965"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 17041.966101001635,
            "unit": "iter/sec",
            "range": "stddev: 0.000019417564231832518",
            "extra": "mean: 58.678675574951725 usec\nrounds: 22825"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 17327.407478079323,
            "unit": "iter/sec",
            "range": "stddev: 0.000016081696510674075",
            "extra": "mean: 57.71203806830808 usec\nrounds: 20148"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 128.03983255172233,
            "unit": "iter/sec",
            "range": "stddev: 0.00020706878463593007",
            "extra": "mean: 7.810069570311606 msec\nrounds: 128"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 129.1521959182034,
            "unit": "iter/sec",
            "range": "stddev: 0.00016828979000367328",
            "extra": "mean: 7.742802922478646 msec\nrounds: 129"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 127.37632532845265,
            "unit": "iter/sec",
            "range": "stddev: 0.0003194877520829836",
            "extra": "mean: 7.850752464568275 msec\nrounds: 127"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 127.29441258310621,
            "unit": "iter/sec",
            "range": "stddev: 0.00017892053982417755",
            "extra": "mean: 7.855804349206089 msec\nrounds: 126"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 128.8487356410823,
            "unit": "iter/sec",
            "range": "stddev: 0.00017395648164357153",
            "extra": "mean: 7.7610385156248185 msec\nrounds: 128"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 128.3698715151959,
            "unit": "iter/sec",
            "range": "stddev: 0.0001552173358010669",
            "extra": "mean: 7.789989879997847 msec\nrounds: 125"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 79.30998945047136,
            "unit": "iter/sec",
            "range": "stddev: 0.00043480734657529076",
            "extra": "mean: 12.608752149998637 msec\nrounds: 80"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 9.651576999010969,
            "unit": "iter/sec",
            "range": "stddev: 0.0025381040272174317",
            "extra": "mean: 103.61001109999677 msec\nrounds: 10"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 17.07415138326693,
            "unit": "iter/sec",
            "range": "stddev: 0.001454378969513445",
            "extra": "mean: 58.56806452940459 msec\nrounds: 17"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 21.82248930343691,
            "unit": "iter/sec",
            "range": "stddev: 0.0008842262709824745",
            "extra": "mean: 45.82428640909019 msec\nrounds: 22"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 1.8417912947407407,
            "unit": "iter/sec",
            "range": "stddev: 0.00568634750046046",
            "extra": "mean: 542.9496831999984 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 1.8523370955658314,
            "unit": "iter/sec",
            "range": "stddev: 0.0038875888585909726",
            "extra": "mean: 539.8585399999945 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 1.533633706741441,
            "unit": "iter/sec",
            "range": "stddev: 0.021016717078455167",
            "extra": "mean: 652.0461800000021 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.18445676321377286,
            "unit": "iter/sec",
            "range": "stddev: 0.0839872313107206",
            "extra": "mean: 5.421324664799999 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 1.3082602794731786,
            "unit": "iter/sec",
            "range": "stddev: 0.003990255974170964",
            "extra": "mean: 764.3738907999932 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.12106720957348768,
            "unit": "iter/sec",
            "range": "stddev: 0.38770425900143557",
            "extra": "mean: 8.259874854000008 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 7.58036693416121,
            "unit": "iter/sec",
            "range": "stddev: 0.011404300733949678",
            "extra": "mean: 131.919735375007 msec\nrounds: 8"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 7.637168743915563,
            "unit": "iter/sec",
            "range": "stddev: 0.011805266677420214",
            "extra": "mean: 130.93857599999836 msec\nrounds: 8"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 1.5216409564758338,
            "unit": "iter/sec",
            "range": "stddev: 0.1496781997021316",
            "extra": "mean: 657.1852549999903 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.19058244912172465,
            "unit": "iter/sec",
            "range": "stddev: 0.12791858968837175",
            "extra": "mean: 5.247072879000006 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 1.4724735193631069,
            "unit": "iter/sec",
            "range": "stddev: 0.055446654644940106",
            "extra": "mean: 679.1293608000046 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.04584301767559263,
            "unit": "iter/sec",
            "range": "stddev: 15.441933814622715",
            "extra": "mean: 21.813572724999993 sec\nrounds: 5"
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
          "id": "5d948ad899243576c0385582304bb59601d0fabf",
          "message": "Support to unknown length of objectives added",
          "timestamp": "2023-11-17T18:32:22Z",
          "url": "https://github.com/alcides/GeneticEngine/pull/142/commits/5d948ad899243576c0385582304bb59601d0fabf"
        },
        "date": 1700664182138,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 17378.71605634909,
            "unit": "iter/sec",
            "range": "stddev: 0.000015085743916830208",
            "extra": "mean: 57.54165018621515 usec\nrounds: 20408"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 18062.638585744182,
            "unit": "iter/sec",
            "range": "stddev: 0.000014274255694426018",
            "extra": "mean: 55.36289702376282 usec\nrounds: 22578"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 16992.378000236975,
            "unit": "iter/sec",
            "range": "stddev: 0.000017616820184061152",
            "extra": "mean: 58.84991494339721 usec\nrounds: 20939"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 130.10066486903145,
            "unit": "iter/sec",
            "range": "stddev: 0.0001504465440818926",
            "extra": "mean: 7.686355800000491 msec\nrounds: 130"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 130.1293803108842,
            "unit": "iter/sec",
            "range": "stddev: 0.0005356611627286808",
            "extra": "mean: 7.684659664181609 msec\nrounds: 134"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 130.00131789851798,
            "unit": "iter/sec",
            "range": "stddev: 0.00016994826496124127",
            "extra": "mean: 7.692229710937415 msec\nrounds: 128"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 128.43290120253903,
            "unit": "iter/sec",
            "range": "stddev: 0.00022218796100424148",
            "extra": "mean: 7.786166867187694 msec\nrounds: 128"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 126.55316479571391,
            "unit": "iter/sec",
            "range": "stddev: 0.0005662481388483467",
            "extra": "mean: 7.9018174030987804 msec\nrounds: 129"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 129.99431859831728,
            "unit": "iter/sec",
            "range": "stddev: 0.00022487362131920642",
            "extra": "mean: 7.692643884614697 msec\nrounds: 130"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 88.88449382501913,
            "unit": "iter/sec",
            "range": "stddev: 0.00005853663175538153",
            "extra": "mean: 11.250556277775873 msec\nrounds: 90"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 9.919738646124554,
            "unit": "iter/sec",
            "range": "stddev: 0.0013514379070174094",
            "extra": "mean: 100.8091075454574 msec\nrounds: 11"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 17.67404856853132,
            "unit": "iter/sec",
            "range": "stddev: 0.000690054437422812",
            "extra": "mean: 56.580131944443224 msec\nrounds: 18"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 22.444809161163437,
            "unit": "iter/sec",
            "range": "stddev: 0.0012591185753045482",
            "extra": "mean: 44.553731458332635 msec\nrounds: 24"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 1.87815757377307,
            "unit": "iter/sec",
            "range": "stddev: 0.003993685415652322",
            "extra": "mean: 532.4366889999965 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 1.860454671426987,
            "unit": "iter/sec",
            "range": "stddev: 0.0038246810239008734",
            "extra": "mean: 537.5030175999882 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 1.5411240593087396,
            "unit": "iter/sec",
            "range": "stddev: 0.018744848588765992",
            "extra": "mean: 648.8770283999997 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.18185320663997506,
            "unit": "iter/sec",
            "range": "stddev: 0.08937070831401298",
            "extra": "mean: 5.498940703200003 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 1.3080063372143187,
            "unit": "iter/sec",
            "range": "stddev: 0.012453842550366903",
            "extra": "mean: 764.5222897999986 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.11361601381790284,
            "unit": "iter/sec",
            "range": "stddev: 0.19707671786078232",
            "extra": "mean: 8.801576172200004 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 7.770144087133148,
            "unit": "iter/sec",
            "range": "stddev: 0.011875074559134018",
            "extra": "mean: 128.69774212500573 msec\nrounds: 8"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 7.648582299083904,
            "unit": "iter/sec",
            "range": "stddev: 0.0120436580057856",
            "extra": "mean: 130.74318362499326 msec\nrounds: 8"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 1.5214956869572762,
            "unit": "iter/sec",
            "range": "stddev: 0.14807029705795688",
            "extra": "mean: 657.2480018000078 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.19112740298185135,
            "unit": "iter/sec",
            "range": "stddev: 0.05725106503667754",
            "extra": "mean: 5.232112111600008 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 1.470332738601274,
            "unit": "iter/sec",
            "range": "stddev: 0.05724841008374176",
            "extra": "mean: 680.1181622000058 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.0516884147922935,
            "unit": "iter/sec",
            "range": "stddev: 3.3588489686370657",
            "extra": "mean: 19.346695077000028 sec\nrounds: 5"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "619d625bf1892a2161047c981ae2732dd45d0e29",
          "message": "Merge pull request #142 from alcides/unknown_length_objectives\n\nSupport to unknown length of objectives added",
          "timestamp": "2023-11-22T19:31:42Z",
          "tree_id": "376983d414c6cbf57445690e774bee099962ddab",
          "url": "https://github.com/alcides/GeneticEngine/commit/619d625bf1892a2161047c981ae2732dd45d0e29"
        },
        "date": 1700682039057,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 16793.335152887907,
            "unit": "iter/sec",
            "range": "stddev: 0.000016901439421419048",
            "extra": "mean: 59.54743300814982 usec\nrounds: 20092"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 18025.408691106775,
            "unit": "iter/sec",
            "range": "stddev: 0.000014628699099977938",
            "extra": "mean: 55.477244213240596 usec\nrounds: 22206"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 17296.646053454904,
            "unit": "iter/sec",
            "range": "stddev: 0.00001581973555564759",
            "extra": "mean: 57.814676724581275 usec\nrounds: 20614"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 129.6264491109231,
            "unit": "iter/sec",
            "range": "stddev: 0.00015964282392797434",
            "extra": "mean: 7.714474992247042 msec\nrounds: 129"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 127.55721832711757,
            "unit": "iter/sec",
            "range": "stddev: 0.0007715318128596264",
            "extra": "mean: 7.839619059703254 msec\nrounds: 134"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 127.12338499220365,
            "unit": "iter/sec",
            "range": "stddev: 0.00034700205017018095",
            "extra": "mean: 7.866373288135216 msec\nrounds: 118"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 127.61749590807115,
            "unit": "iter/sec",
            "range": "stddev: 0.00026100455192546004",
            "extra": "mean: 7.83591617187307 msec\nrounds: 128"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 127.97736931534699,
            "unit": "iter/sec",
            "range": "stddev: 0.00024592959551053643",
            "extra": "mean: 7.813881511628169 msec\nrounds: 129"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 128.51918505303584,
            "unit": "iter/sec",
            "range": "stddev: 0.000234382551766671",
            "extra": "mean: 7.780939472868049 msec\nrounds: 129"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 84.81134628703376,
            "unit": "iter/sec",
            "range": "stddev: 0.0015844969474701975",
            "extra": "mean: 11.79087520454658 msec\nrounds: 88"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 9.84985680071316,
            "unit": "iter/sec",
            "range": "stddev: 0.0007995281654239928",
            "extra": "mean: 101.52431860000206 msec\nrounds: 10"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 17.631859607391917,
            "unit": "iter/sec",
            "range": "stddev: 0.0008548200628307167",
            "extra": "mean: 56.715515111109646 msec\nrounds: 18"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 22.535051874548135,
            "unit": "iter/sec",
            "range": "stddev: 0.00043666079626189443",
            "extra": "mean: 44.375313869564884 msec\nrounds: 23"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 1.8548362875603686,
            "unit": "iter/sec",
            "range": "stddev: 0.0046413199566366",
            "extra": "mean: 539.1311388000076 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 1.8452532957757373,
            "unit": "iter/sec",
            "range": "stddev: 0.006727249567305107",
            "extra": "mean: 541.931019599997 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 1.5298625327976731,
            "unit": "iter/sec",
            "range": "stddev: 0.017147818302187333",
            "extra": "mean: 653.6535006000122 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.18023931054710146,
            "unit": "iter/sec",
            "range": "stddev: 0.18247864937627556",
            "extra": "mean: 5.548179234399993 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 1.2983208077469832,
            "unit": "iter/sec",
            "range": "stddev: 0.010862648999207447",
            "extra": "mean: 770.2256592000026 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.11016487991824017,
            "unit": "iter/sec",
            "range": "stddev: 0.3882173393627246",
            "extra": "mean: 9.0773030456 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 7.584597078898911,
            "unit": "iter/sec",
            "range": "stddev: 0.011882454105105206",
            "extra": "mean: 131.84615999999494 msec\nrounds: 8"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 7.588727940665659,
            "unit": "iter/sec",
            "range": "stddev: 0.010849420734948902",
            "extra": "mean: 131.77439062498308 msec\nrounds: 8"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 1.5196440032599892,
            "unit": "iter/sec",
            "range": "stddev: 0.15103004318868904",
            "extra": "mean: 658.0488574000015 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.18870968170501276,
            "unit": "iter/sec",
            "range": "stddev: 0.14047176294167107",
            "extra": "mean: 5.299145178799995 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 1.4532991694399575,
            "unit": "iter/sec",
            "range": "stddev: 0.06009203622756245",
            "extra": "mean: 688.0895696000152 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.040701155705964914,
            "unit": "iter/sec",
            "range": "stddev: 11.605608102363416",
            "extra": "mean: 24.56932690620001 sec\nrounds: 5"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "778f4e625af7d2abba83e9d0fb10e0eb19dad7ec",
          "message": "One more funding source",
          "timestamp": "2023-12-19T16:14:59Z",
          "tree_id": "f3192db8555153ca111ce8c5b6c3fecb42f8e40d",
          "url": "https://github.com/alcides/GeneticEngine/commit/778f4e625af7d2abba83e9d0fb10e0eb19dad7ec"
        },
        "date": 1703002969862,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 17585.91106464389,
            "unit": "iter/sec",
            "range": "stddev: 0.000015138231001710124",
            "extra": "mean: 56.863701648672574 usec\nrounds: 20744"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 18435.373504515683,
            "unit": "iter/sec",
            "range": "stddev: 0.000014198040137419618",
            "extra": "mean: 54.24354433367208 usec\nrounds: 22872"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 17300.729924846608,
            "unit": "iter/sec",
            "range": "stddev: 0.00001671451944756379",
            "extra": "mean: 57.80102945621043 usec\nrounds: 18570"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 131.95680750191016,
            "unit": "iter/sec",
            "range": "stddev: 0.00023169623451806966",
            "extra": "mean: 7.5782372954538495 msec\nrounds: 132"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 133.37914096092712,
            "unit": "iter/sec",
            "range": "stddev: 0.0001562413608418853",
            "extra": "mean: 7.497424205880484 msec\nrounds: 136"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 131.63117536801556,
            "unit": "iter/sec",
            "range": "stddev: 0.00022575819148903703",
            "extra": "mean: 7.596984507691218 msec\nrounds: 130"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 127.48192480352203,
            "unit": "iter/sec",
            "range": "stddev: 0.0007624852223834166",
            "extra": "mean: 7.844249304685524 msec\nrounds: 128"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 132.19073742660947,
            "unit": "iter/sec",
            "range": "stddev: 0.00016052973062476343",
            "extra": "mean: 7.564826548873643 msec\nrounds: 133"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 131.9605427142639,
            "unit": "iter/sec",
            "range": "stddev: 0.00022325790506523286",
            "extra": "mean: 7.578022789473628 msec\nrounds: 133"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 85.59345586442024,
            "unit": "iter/sec",
            "range": "stddev: 0.0005304923624563767",
            "extra": "mean: 11.683136168540697 msec\nrounds: 89"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 9.985402757281141,
            "unit": "iter/sec",
            "range": "stddev: 0.0006315947869472814",
            "extra": "mean: 100.14618581817558 msec\nrounds: 11"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 17.038164653953455,
            "unit": "iter/sec",
            "range": "stddev: 0.003375699674821256",
            "extra": "mean: 58.69176758823989 msec\nrounds: 17"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 22.235187355880715,
            "unit": "iter/sec",
            "range": "stddev: 0.0007088458325045807",
            "extra": "mean: 44.97376091303868 msec\nrounds: 23"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 1.8971744241478596,
            "unit": "iter/sec",
            "range": "stddev: 0.0021496117713855666",
            "extra": "mean: 527.0996632000049 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 1.856215159203411,
            "unit": "iter/sec",
            "range": "stddev: 0.016764094236605",
            "extra": "mean: 538.7306504000037 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 1.5543459598682243,
            "unit": "iter/sec",
            "range": "stddev: 0.01889585062743568",
            "extra": "mean: 643.3574158000056 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.1753920070200916,
            "unit": "iter/sec",
            "range": "stddev: 0.09891369494212998",
            "extra": "mean: 5.701514094000004 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 1.3011245201045956,
            "unit": "iter/sec",
            "range": "stddev: 0.008229469880162116",
            "extra": "mean: 768.5659477999934 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.12490474132408659,
            "unit": "iter/sec",
            "range": "stddev: 0.3250096037632513",
            "extra": "mean: 8.006101204799984 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 6.826075673084452,
            "unit": "iter/sec",
            "range": "stddev: 0.05654280046570382",
            "extra": "mean: 146.4970574444477 msec\nrounds: 9"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 6.822139294671081,
            "unit": "iter/sec",
            "range": "stddev: 0.057219863235944454",
            "extra": "mean: 146.5815863333546 msec\nrounds: 9"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 1.5222484213454912,
            "unit": "iter/sec",
            "range": "stddev: 0.15389028704460422",
            "extra": "mean: 656.923000200004 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.1903898611347285,
            "unit": "iter/sec",
            "range": "stddev: 0.07402996557800788",
            "extra": "mean: 5.2523805314000125 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 1.4745673392122287,
            "unit": "iter/sec",
            "range": "stddev: 0.05020425662961534",
            "extra": "mean: 678.1650273999958 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.05215628998041748,
            "unit": "iter/sec",
            "range": "stddev: 6.463450686534782",
            "extra": "mean: 19.17314288219999 sec\nrounds: 5"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e246a4f91cfa3e4393dfc45fb7ea66604fd007d8",
          "message": "Merge pull request #143 from alcides/dependabot/pip/mypy-1.7.1\n\nBump mypy from 1.7.0 to 1.7.1",
          "timestamp": "2023-12-24T14:53:12Z",
          "tree_id": "6a83c7a8ff78a4d44e5f8dbfe1aa0b3a649e2677",
          "url": "https://github.com/alcides/GeneticEngine/commit/e246a4f91cfa3e4393dfc45fb7ea66604fd007d8"
        },
        "date": 1703430076965,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 17464.0766650895,
            "unit": "iter/sec",
            "range": "stddev: 0.00001570280836008032",
            "extra": "mean: 57.2603991139703 usec\nrounds: 20543"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 17928.13793617991,
            "unit": "iter/sec",
            "range": "stddev: 0.0000154909955736659",
            "extra": "mean: 55.77824108447694 usec\nrounds: 22685"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 17478.600957298208,
            "unit": "iter/sec",
            "range": "stddev: 0.000015954799629761918",
            "extra": "mean: 57.21281711523078 usec\nrounds: 20543"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 131.27961513634082,
            "unit": "iter/sec",
            "range": "stddev: 0.00017281542345556477",
            "extra": "mean: 7.617328851561966 msec\nrounds: 128"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 131.85657884904558,
            "unit": "iter/sec",
            "range": "stddev: 0.0002410588622003348",
            "extra": "mean: 7.583997770371685 msec\nrounds: 135"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 130.93533196622727,
            "unit": "iter/sec",
            "range": "stddev: 0.00017257933325232202",
            "extra": "mean: 7.637357961241007 msec\nrounds: 129"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 127.35697140225665,
            "unit": "iter/sec",
            "range": "stddev: 0.0006639514470375671",
            "extra": "mean: 7.851945511812642 msec\nrounds: 127"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 128.73534035169348,
            "unit": "iter/sec",
            "range": "stddev: 0.0005168741149515944",
            "extra": "mean: 7.767874751937495 msec\nrounds: 129"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 129.73874251952503,
            "unit": "iter/sec",
            "range": "stddev: 0.00022681985513844507",
            "extra": "mean: 7.707797844961424 msec\nrounds: 129"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 86.41161976328598,
            "unit": "iter/sec",
            "range": "stddev: 0.00011929633675654148",
            "extra": "mean: 11.572517709300868 msec\nrounds: 86"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 9.76628729543129,
            "unit": "iter/sec",
            "range": "stddev: 0.001098220253805819",
            "extra": "mean: 102.39305580000746 msec\nrounds: 10"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 16.919848781299667,
            "unit": "iter/sec",
            "range": "stddev: 0.0005371965464097812",
            "extra": "mean: 59.102183058824416 msec\nrounds: 17"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 21.572427539837804,
            "unit": "iter/sec",
            "range": "stddev: 0.0007868727739108697",
            "extra": "mean: 46.35546918182017 msec\nrounds: 22"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 1.8850786154674881,
            "unit": "iter/sec",
            "range": "stddev: 0.005764425961905465",
            "extra": "mean: 530.4818546000035 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 1.8676395003601356,
            "unit": "iter/sec",
            "range": "stddev: 0.009977512398897166",
            "extra": "mean: 535.4352377999987 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 1.552798268302728,
            "unit": "iter/sec",
            "range": "stddev: 0.021389487784988045",
            "extra": "mean: 643.9986573999988 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.17442750970692852,
            "unit": "iter/sec",
            "range": "stddev: 0.10362383987296256",
            "extra": "mean: 5.733040629200008 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 1.2969844682330558,
            "unit": "iter/sec",
            "range": "stddev: 0.007181944667802818",
            "extra": "mean: 771.0192561999975 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.11289099536170905,
            "unit": "iter/sec",
            "range": "stddev: 0.5152885305484433",
            "extra": "mean: 8.858102426999995 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 6.9312969080325955,
            "unit": "iter/sec",
            "range": "stddev: 0.05658781238500102",
            "extra": "mean: 144.2731444444563 msec\nrounds: 9"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 6.851560398878502,
            "unit": "iter/sec",
            "range": "stddev: 0.056614520554505776",
            "extra": "mean: 145.95215422222432 msec\nrounds: 9"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 1.5199850630460008,
            "unit": "iter/sec",
            "range": "stddev: 0.15460470390655107",
            "extra": "mean: 657.9012019999936 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.19319880459174704,
            "unit": "iter/sec",
            "range": "stddev: 0.06248242984652237",
            "extra": "mean: 5.17601546300001 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 1.478550207723902,
            "unit": "iter/sec",
            "range": "stddev: 0.056562063087914595",
            "extra": "mean: 676.3382094000121 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.06050261097205593,
            "unit": "iter/sec",
            "range": "stddev: 5.6919279425658855",
            "extra": "mean: 16.528212319000012 sec\nrounds: 5"
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
          "id": "bffa8ae1d7bcb66b1554c118a437630405e36849",
          "message": "Fixed bug with mutation and xover",
          "timestamp": "2024-01-20T01:07:33Z",
          "tree_id": "34fb9ef96acee84c2c6926dff9b2c715f0deee46",
          "url": "https://github.com/alcides/GeneticEngine/commit/bffa8ae1d7bcb66b1554c118a437630405e36849"
        },
        "date": 1705713411808,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 17622.072503161344,
            "unit": "iter/sec",
            "range": "stddev: 0.000015051756095252695",
            "extra": "mean: 56.747014281129715 usec\nrounds: 19606"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 18194.572519920253,
            "unit": "iter/sec",
            "range": "stddev: 0.00001455165089175318",
            "extra": "mean: 54.96144517301267 usec\nrounds: 21823"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 17116.256812551645,
            "unit": "iter/sec",
            "range": "stddev: 0.00001755867925587939",
            "extra": "mean: 58.42398901532507 usec\nrounds: 20847"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 132.04311511413812,
            "unit": "iter/sec",
            "range": "stddev: 0.00015126637847606863",
            "extra": "mean: 7.573283916663128 msec\nrounds: 132"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 132.80202045270647,
            "unit": "iter/sec",
            "range": "stddev: 0.00021652556266387027",
            "extra": "mean: 7.530005918517788 msec\nrounds: 135"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 131.44728475876198,
            "unit": "iter/sec",
            "range": "stddev: 0.00016694985100838586",
            "extra": "mean: 7.6076124496237805 msec\nrounds: 129"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 129.74026434554423,
            "unit": "iter/sec",
            "range": "stddev: 0.00024153117870291118",
            "extra": "mean: 7.707707434113485 msec\nrounds: 129"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 126.65120707469134,
            "unit": "iter/sec",
            "range": "stddev: 0.0008350222632283651",
            "extra": "mean: 7.8957005076963815 msec\nrounds: 130"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 130.6505654759629,
            "unit": "iter/sec",
            "range": "stddev: 0.0002177950073291083",
            "extra": "mean: 7.654004376919287 msec\nrounds: 130"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 89.44775101638503,
            "unit": "iter/sec",
            "range": "stddev: 0.00023404601818511776",
            "extra": "mean: 11.179710933333808 msec\nrounds: 90"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 10.253180891613217,
            "unit": "iter/sec",
            "range": "stddev: 0.0011322462556863718",
            "extra": "mean: 97.53070881817455 msec\nrounds: 11"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 17.883388237404223,
            "unit": "iter/sec",
            "range": "stddev: 0.0005621088924929241",
            "extra": "mean: 55.91781527778039 msec\nrounds: 18"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 22.517612130737785,
            "unit": "iter/sec",
            "range": "stddev: 0.00392963383201407",
            "extra": "mean: 44.409682260888786 msec\nrounds: 23"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 1.1091948434227643,
            "unit": "iter/sec",
            "range": "stddev: 0.0020147128923806777",
            "extra": "mean: 901.5548583999816 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 1.1126628465414523,
            "unit": "iter/sec",
            "range": "stddev: 0.003292797411072181",
            "extra": "mean: 898.7448471999869 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 0.7563589125738437,
            "unit": "iter/sec",
            "range": "stddev: 0.01620093993020292",
            "extra": "mean: 1.3221236417999762 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.11128896189972567,
            "unit": "iter/sec",
            "range": "stddev: 0.18663009558530344",
            "extra": "mean: 8.985617108200064 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 0.37767914409294007,
            "unit": "iter/sec",
            "range": "stddev: 0.007787515739625623",
            "extra": "mean: 2.6477501223999753 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.10207616407932066,
            "unit": "iter/sec",
            "range": "stddev: 0.13036149352915688",
            "extra": "mean: 9.796606377399986 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 8.116702072264596,
            "unit": "iter/sec",
            "range": "stddev: 0.008028305720637622",
            "extra": "mean: 123.20274799996393 msec\nrounds: 9"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 7.959575685279312,
            "unit": "iter/sec",
            "range": "stddev: 0.008926683568920022",
            "extra": "mean: 125.63483777777643 msec\nrounds: 9"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 1.5755974566687883,
            "unit": "iter/sec",
            "range": "stddev: 0.10927892483393951",
            "extra": "mean: 634.6798769999623 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.1953539136484781,
            "unit": "iter/sec",
            "range": "stddev: 0.12159893072131295",
            "extra": "mean: 5.118914596200057 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 1.5092256704413298,
            "unit": "iter/sec",
            "range": "stddev: 0.04256718668205163",
            "extra": "mean: 662.591433200032 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.04106350714297395,
            "unit": "iter/sec",
            "range": "stddev: 17.19191274671208",
            "extra": "mean: 24.352522947400075 sec\nrounds: 5"
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
          "id": "34a553b3fd67f1ab84104a5fb21b2f7fdf071400",
          "message": "Updated python publish",
          "timestamp": "2024-01-31T21:21:55Z",
          "tree_id": "b312667cc97151a8291407c04612261741db7581",
          "url": "https://github.com/alcides/GeneticEngine/commit/34a553b3fd67f1ab84104a5fb21b2f7fdf071400"
        },
        "date": 1706736693921,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 17544.48074381718,
            "unit": "iter/sec",
            "range": "stddev: 0.000014880275859106898",
            "extra": "mean: 56.99798213477524 usec\nrounds: 19983"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 18147.831939681735,
            "unit": "iter/sec",
            "range": "stddev: 0.000014220578575542656",
            "extra": "mean: 55.10300091623712 usec\nrounds: 21827"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 17567.639517028296,
            "unit": "iter/sec",
            "range": "stddev: 0.000015714795316248794",
            "extra": "mean: 56.92284379074952 usec\nrounds: 21484"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 125.85587781077199,
            "unit": "iter/sec",
            "range": "stddev: 0.0007666973425274193",
            "extra": "mean: 7.945596323308232 msec\nrounds: 133"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 132.584385198888,
            "unit": "iter/sec",
            "range": "stddev: 0.0005279470713204297",
            "extra": "mean: 7.54236630882222 msec\nrounds: 136"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 129.13263486627312,
            "unit": "iter/sec",
            "range": "stddev: 0.000173235337089138",
            "extra": "mean: 7.743975804687775 msec\nrounds: 128"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 129.64244456007032,
            "unit": "iter/sec",
            "range": "stddev: 0.0002296226510551123",
            "extra": "mean: 7.713523170543472 msec\nrounds: 129"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 130.77286378286576,
            "unit": "iter/sec",
            "range": "stddev: 0.00015286450050856374",
            "extra": "mean: 7.646846379845226 msec\nrounds: 129"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 127.11801876072757,
            "unit": "iter/sec",
            "range": "stddev: 0.0008591196915188447",
            "extra": "mean: 7.866705363637595 msec\nrounds: 132"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 89.66338357347445,
            "unit": "iter/sec",
            "range": "stddev: 0.00012956341748956383",
            "extra": "mean: 11.15282471111022 msec\nrounds: 90"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 10.418869103119569,
            "unit": "iter/sec",
            "range": "stddev: 0.000370984921041523",
            "extra": "mean: 95.97970663635506 msec\nrounds: 11"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 18.009529310204318,
            "unit": "iter/sec",
            "range": "stddev: 0.00024545330787804274",
            "extra": "mean: 55.52615966667121 msec\nrounds: 18"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 22.703078514152384,
            "unit": "iter/sec",
            "range": "stddev: 0.0037251142415521154",
            "extra": "mean: 44.046889913041156 msec\nrounds: 23"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 1.0950315462162985,
            "unit": "iter/sec",
            "range": "stddev: 0.00828652162748952",
            "extra": "mean: 913.2157000000007 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 1.1044965105086106,
            "unit": "iter/sec",
            "range": "stddev: 0.008248972921775516",
            "extra": "mean: 905.3899134000062 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 0.7609007163934705,
            "unit": "iter/sec",
            "range": "stddev: 0.016574207183438196",
            "extra": "mean: 1.3142319076000035 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.10975614133895267,
            "unit": "iter/sec",
            "range": "stddev: 0.19609790888700207",
            "extra": "mean: 9.111107476999996 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 0.3635586559482259,
            "unit": "iter/sec",
            "range": "stddev: 0.006198007454683485",
            "extra": "mean: 2.7505877899999973 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.09197194254300099,
            "unit": "iter/sec",
            "range": "stddev: 0.40482793840101267",
            "extra": "mean: 10.87288114559998 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 7.950083994889842,
            "unit": "iter/sec",
            "range": "stddev: 0.00845153833174125",
            "extra": "mean: 125.78483455555694 msec\nrounds: 9"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 7.912785371076952,
            "unit": "iter/sec",
            "range": "stddev: 0.009046331462856426",
            "extra": "mean: 126.37774855555031 msec\nrounds: 9"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 1.5865701411947062,
            "unit": "iter/sec",
            "range": "stddev: 0.11091043479691849",
            "extra": "mean: 630.2904447999936 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.18554736479684444,
            "unit": "iter/sec",
            "range": "stddev: 0.16153996042718807",
            "extra": "mean: 5.389459457399994 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 1.5163709526417506,
            "unit": "iter/sec",
            "range": "stddev: 0.039688969437663056",
            "extra": "mean: 659.4692401999964 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.044011954126611866,
            "unit": "iter/sec",
            "range": "stddev: 9.561449461082516",
            "extra": "mean: 22.72109975220003 sec\nrounds: 5"
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
          "id": "e38dee50d3150fa5a52917a1d6ad6a1cb1fda9dd",
          "message": "Version bump",
          "timestamp": "2024-01-31T22:25:58Z",
          "tree_id": "43735f594e07f5002d951a0c4b905aa82a826ea2",
          "url": "https://github.com/alcides/GeneticEngine/commit/e38dee50d3150fa5a52917a1d6ad6a1cb1fda9dd"
        },
        "date": 1706740485040,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 17778.15142823606,
            "unit": "iter/sec",
            "range": "stddev: 0.000014715634418264786",
            "extra": "mean: 56.248817771444735 usec\nrounds: 21045"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 18131.170747407603,
            "unit": "iter/sec",
            "range": "stddev: 0.00001488461293557988",
            "extra": "mean: 55.15363646018171 usec\nrounds: 22567"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 17223.733481488125,
            "unit": "iter/sec",
            "range": "stddev: 0.000017750356885690953",
            "extra": "mean: 58.05942138356871 usec\nrounds: 20670"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 132.82028154116142,
            "unit": "iter/sec",
            "range": "stddev: 0.00016136180350373355",
            "extra": "mean: 7.528970639096988 msec\nrounds: 133"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 134.51634750614932,
            "unit": "iter/sec",
            "range": "stddev: 0.00015030655329414014",
            "extra": "mean: 7.434040683823101 msec\nrounds: 136"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 132.58274188081398,
            "unit": "iter/sec",
            "range": "stddev: 0.00019896242354692842",
            "extra": "mean: 7.542459793891997 msec\nrounds: 131"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 132.17761878274928,
            "unit": "iter/sec",
            "range": "stddev: 0.00018343186402168537",
            "extra": "mean: 7.56557735877832 msec\nrounds: 131"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 128.49825048658943,
            "unit": "iter/sec",
            "range": "stddev: 0.0006472485567375957",
            "extra": "mean: 7.782207121211847 msec\nrounds: 132"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 132.27638016799088,
            "unit": "iter/sec",
            "range": "stddev: 0.0001651537005471293",
            "extra": "mean: 7.559928679103562 msec\nrounds: 134"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 90.02633397547322,
            "unit": "iter/sec",
            "range": "stddev: 0.0000668844642272619",
            "extra": "mean: 11.107860954023076 msec\nrounds: 87"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 10.009586044059358,
            "unit": "iter/sec",
            "range": "stddev: 0.0008853040234076925",
            "extra": "mean: 99.90423136364318 msec\nrounds: 11"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 17.253656112994307,
            "unit": "iter/sec",
            "range": "stddev: 0.004846417734892605",
            "extra": "mean: 57.958730222220346 msec\nrounds: 18"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 22.437579147462237,
            "unit": "iter/sec",
            "range": "stddev: 0.0007640824951650333",
            "extra": "mean: 44.568087913044906 msec\nrounds: 23"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 1.106851454289094,
            "unit": "iter/sec",
            "range": "stddev: 0.004290667845151099",
            "extra": "mean: 903.4636003999992 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 1.1094073850680573,
            "unit": "iter/sec",
            "range": "stddev: 0.006075969659190412",
            "extra": "mean: 901.3821374000088 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 0.7627693009610027,
            "unit": "iter/sec",
            "range": "stddev: 0.015713357845144688",
            "extra": "mean: 1.311012384399993 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.11334270124450936,
            "unit": "iter/sec",
            "range": "stddev: 0.22512957594199198",
            "extra": "mean: 8.822800136399986 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 0.3818795326675588,
            "unit": "iter/sec",
            "range": "stddev: 0.0097874920135827",
            "extra": "mean: 2.6186268560000032 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.09620019635195041,
            "unit": "iter/sec",
            "range": "stddev: 0.45049875832696756",
            "extra": "mean: 10.394989178000003 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 8.138407362057372,
            "unit": "iter/sec",
            "range": "stddev: 0.008974804048466074",
            "extra": "mean: 122.87416388889166 msec\nrounds: 9"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 8.094248617884421,
            "unit": "iter/sec",
            "range": "stddev: 0.009193964042055056",
            "extra": "mean: 123.54451255555432 msec\nrounds: 9"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 1.6018720578956558,
            "unit": "iter/sec",
            "range": "stddev: 0.10951729589475695",
            "extra": "mean: 624.2695819999994 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.19166790302654368,
            "unit": "iter/sec",
            "range": "stddev: 0.06516584240130732",
            "extra": "mean: 5.217357649400026 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 1.5031209229075606,
            "unit": "iter/sec",
            "range": "stddev: 0.04698510773289259",
            "extra": "mean: 665.2824698000018 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.0645552157276959,
            "unit": "iter/sec",
            "range": "stddev: 7.745917804680802",
            "extra": "mean: 15.490615107199982 sec\nrounds: 5"
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
          "id": "085d013ab9e71a6a1c3a477db7549390b86fa585",
          "message": "Version Bump",
          "timestamp": "2024-02-01T15:02:54Z",
          "tree_id": "5b6bbe8a4947546375ce93438728f1cb65487388",
          "url": "https://github.com/alcides/GeneticEngine/commit/085d013ab9e71a6a1c3a477db7549390b86fa585"
        },
        "date": 1706800261627,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 17176.505052221557,
            "unit": "iter/sec",
            "range": "stddev: 0.00001807972355646284",
            "extra": "mean: 58.21906126768572 usec\nrounds: 20288"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 18371.56261599899,
            "unit": "iter/sec",
            "range": "stddev: 0.000014383853968790675",
            "extra": "mean: 54.43195121187697 usec\nrounds: 22280"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 17701.738615047576,
            "unit": "iter/sec",
            "range": "stddev: 0.000015655925884411263",
            "extra": "mean: 56.491626147385205 usec\nrounds: 21027"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 132.64717046482326,
            "unit": "iter/sec",
            "range": "stddev: 0.00014497642037787336",
            "extra": "mean: 7.538796315788661 msec\nrounds: 133"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 131.74424012029846,
            "unit": "iter/sec",
            "range": "stddev: 0.0004456217426219419",
            "extra": "mean: 7.590464669171714 msec\nrounds: 133"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 131.05624509479702,
            "unit": "iter/sec",
            "range": "stddev: 0.0002406486696909762",
            "extra": "mean: 7.630311697673538 msec\nrounds: 129"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 131.32288475666215,
            "unit": "iter/sec",
            "range": "stddev: 0.00027680840214234224",
            "extra": "mean: 7.614819015383143 msec\nrounds: 130"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 130.3186230386689,
            "unit": "iter/sec",
            "range": "stddev: 0.00025973397339351504",
            "extra": "mean: 7.673500353846389 msec\nrounds: 130"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 132.3909654812325,
            "unit": "iter/sec",
            "range": "stddev: 0.00016645066806359986",
            "extra": "mean: 7.553385507576483 msec\nrounds: 132"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 87.75462796841103,
            "unit": "iter/sec",
            "range": "stddev: 0.00007661519242009327",
            "extra": "mean: 11.395410397728188 msec\nrounds: 88"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 10.218117165405138,
            "unit": "iter/sec",
            "range": "stddev: 0.0006111125733004389",
            "extra": "mean: 97.86538789999781 msec\nrounds: 10"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 17.738635083656455,
            "unit": "iter/sec",
            "range": "stddev: 0.001004628026910411",
            "extra": "mean: 56.37412322221754 msec\nrounds: 18"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 22.876356263123444,
            "unit": "iter/sec",
            "range": "stddev: 0.0006372387971462743",
            "extra": "mean: 43.71325522727561 msec\nrounds: 22"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 1.9068020987451035,
            "unit": "iter/sec",
            "range": "stddev: 0.003357441182389505",
            "extra": "mean: 524.4382731999906 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 1.9072410143751537,
            "unit": "iter/sec",
            "range": "stddev: 0.005766742928956551",
            "extra": "mean: 524.3175836000034 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 1.5607515812099966,
            "unit": "iter/sec",
            "range": "stddev: 0.015346168788553202",
            "extra": "mean: 640.7169545999977 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.19104331301641503,
            "unit": "iter/sec",
            "range": "stddev: 0.02416275413872546",
            "extra": "mean: 5.234415087399981 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 1.3155414148488123,
            "unit": "iter/sec",
            "range": "stddev: 0.004383846157149552",
            "extra": "mean: 760.1433058000111 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.1209578631682825,
            "unit": "iter/sec",
            "range": "stddev: 0.632180631705488",
            "extra": "mean: 8.26734181480001 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 8.203503629077893,
            "unit": "iter/sec",
            "range": "stddev: 0.008217203489620722",
            "extra": "mean: 121.89913544444961 msec\nrounds: 9"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 8.11950107015611,
            "unit": "iter/sec",
            "range": "stddev: 0.009109468843314672",
            "extra": "mean: 123.16027688888198 msec\nrounds: 9"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 1.5656454992313462,
            "unit": "iter/sec",
            "range": "stddev: 0.11542828115204289",
            "extra": "mean: 638.714192000009 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.19107170686040903,
            "unit": "iter/sec",
            "range": "stddev: 0.12737161138558148",
            "extra": "mean: 5.233637237200003 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 1.5205443722802974,
            "unit": "iter/sec",
            "range": "stddev: 0.039340089997874694",
            "extra": "mean: 657.6592030000029 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.037582973555524445,
            "unit": "iter/sec",
            "range": "stddev: 6.438026160036957",
            "extra": "mean: 26.607793513799994 sec\nrounds: 5"
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
          "id": "78630c74179c170856db03e07f04901c00003b02",
          "message": "Extract all machine learning applications to the gems package",
          "timestamp": "2024-01-17T13:55:59Z",
          "url": "https://github.com/alcides/GeneticEngine/pull/149/commits/78630c74179c170856db03e07f04901c00003b02"
        },
        "date": 1707161056235,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 19085.11414699343,
            "unit": "iter/sec",
            "range": "stddev: 0.000013621327760794233",
            "extra": "mean: 52.39685716826246 usec\nrounds: 22537"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 20034.040513879292,
            "unit": "iter/sec",
            "range": "stddev: 0.000012894020638652693",
            "extra": "mean: 49.91504331376461 usec\nrounds: 24842"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 19008.145232322207,
            "unit": "iter/sec",
            "range": "stddev: 0.000014778236351064901",
            "extra": "mean: 52.609025645466986 usec\nrounds: 22967"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 135.0698900151717,
            "unit": "iter/sec",
            "range": "stddev: 0.0006572532351198232",
            "extra": "mean: 7.403574548610909 msec\nrounds: 144"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 144.8207963231202,
            "unit": "iter/sec",
            "range": "stddev: 0.00023229950769926579",
            "extra": "mean: 6.905085632652009 msec\nrounds: 147"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 142.1178863624318,
            "unit": "iter/sec",
            "range": "stddev: 0.00017023284578400734",
            "extra": "mean: 7.036411992856273 msec\nrounds: 140"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 141.86134061168877,
            "unit": "iter/sec",
            "range": "stddev: 0.00022998906241375848",
            "extra": "mean: 7.049136823944579 msec\nrounds: 142"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 142.87046330767106,
            "unit": "iter/sec",
            "range": "stddev: 0.0001635348608271391",
            "extra": "mean: 6.999347358778444 msec\nrounds: 131"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 130.29158715116023,
            "unit": "iter/sec",
            "range": "stddev: 0.0009975689297396545",
            "extra": "mean: 7.6750926277368245 msec\nrounds: 137"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 92.59321465354178,
            "unit": "iter/sec",
            "range": "stddev: 0.0003947926351701648",
            "extra": "mean: 10.799927443298342 msec\nrounds: 97"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 11.154416511695905,
            "unit": "iter/sec",
            "range": "stddev: 0.0008221901063987715",
            "extra": "mean: 89.650588083335 msec\nrounds: 12"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 19.33509267144082,
            "unit": "iter/sec",
            "range": "stddev: 0.0006239156800483547",
            "extra": "mean: 51.719431450001 msec\nrounds: 20"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 23.94317605485178,
            "unit": "iter/sec",
            "range": "stddev: 0.0031948450784281025",
            "extra": "mean: 41.76555348000136 msec\nrounds: 25"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 2.0265322625940536,
            "unit": "iter/sec",
            "range": "stddev: 0.004386687064156083",
            "extra": "mean: 493.45377739999776 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 2.0031537396072645,
            "unit": "iter/sec",
            "range": "stddev: 0.006146883200157285",
            "extra": "mean: 499.21280640000134 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 1.6756534822702809,
            "unit": "iter/sec",
            "range": "stddev: 0.01807826251193155",
            "extra": "mean: 596.7820975999985 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.2083223889083095,
            "unit": "iter/sec",
            "range": "stddev: 0.01844767252832229",
            "extra": "mean: 4.800252172800003 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 1.4228082551134684,
            "unit": "iter/sec",
            "range": "stddev: 0.0038756170884746513",
            "extra": "mean: 702.8353935999974 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.12960319100155576,
            "unit": "iter/sec",
            "range": "stddev: 0.2819455685260023",
            "extra": "mean: 7.715859403399998 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 8.544250397255686,
            "unit": "iter/sec",
            "range": "stddev: 0.009189513919922756",
            "extra": "mean: 117.03776849999485 msec\nrounds: 10"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 8.528359517648822,
            "unit": "iter/sec",
            "range": "stddev: 0.008917459517026815",
            "extra": "mean: 117.25584479999611 msec\nrounds: 10"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 1.711496633943102,
            "unit": "iter/sec",
            "range": "stddev: 0.10268853865586004",
            "extra": "mean: 584.2839419999962 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.19886552609798777,
            "unit": "iter/sec",
            "range": "stddev: 0.16049361610726437",
            "extra": "mean: 5.028523644199981 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 1.5690607696941101,
            "unit": "iter/sec",
            "range": "stddev: 0.04130807403713118",
            "extra": "mean: 637.3239452000007 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.0591537756128086,
            "unit": "iter/sec",
            "range": "stddev: 7.573844041251041",
            "extra": "mean: 16.90509168079999 sec\nrounds: 5"
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
          "id": "3ecf81d7848f2ce92e3b54b149ce4be5d84a1ba7",
          "message": "Extract all machine learning applications to the gems package",
          "timestamp": "2024-01-17T13:55:59Z",
          "url": "https://github.com/alcides/GeneticEngine/pull/149/commits/3ecf81d7848f2ce92e3b54b149ce4be5d84a1ba7"
        },
        "date": 1707163794325,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 17092.451264341642,
            "unit": "iter/sec",
            "range": "stddev: 0.00001729655420858489",
            "extra": "mean: 58.505359151510646 usec\nrounds: 20696"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 17473.552958950717,
            "unit": "iter/sec",
            "range": "stddev: 0.00001800804842883757",
            "extra": "mean: 57.22934553431827 usec\nrounds: 14097"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 17659.294309066747,
            "unit": "iter/sec",
            "range": "stddev: 0.00001579951627082097",
            "extra": "mean: 56.62740438538213 usec\nrounds: 21116"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 130.34749384208018,
            "unit": "iter/sec",
            "range": "stddev: 0.0006749423054233846",
            "extra": "mean: 7.671800742187873 msec\nrounds: 128"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 133.02326923323776,
            "unit": "iter/sec",
            "range": "stddev: 0.00021243199075921714",
            "extra": "mean: 7.517481759124709 msec\nrounds: 137"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 130.61109192190528,
            "unit": "iter/sec",
            "range": "stddev: 0.0001918818971278942",
            "extra": "mean: 7.656317585936101 msec\nrounds: 128"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 121.6214641199042,
            "unit": "iter/sec",
            "range": "stddev: 0.001244201458754631",
            "extra": "mean: 8.222232870129897 msec\nrounds: 77"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 130.91691506658785,
            "unit": "iter/sec",
            "range": "stddev: 0.0002316099246734029",
            "extra": "mean: 7.6384323560585985 msec\nrounds: 132"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 130.20835753517312,
            "unit": "iter/sec",
            "range": "stddev: 0.00022475892109548884",
            "extra": "mean: 7.67999857251767 msec\nrounds: 131"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 87.65536877592683,
            "unit": "iter/sec",
            "range": "stddev: 0.00044168607995587043",
            "extra": "mean: 11.408314333333044 msec\nrounds: 84"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 9.80380667535274,
            "unit": "iter/sec",
            "range": "stddev: 0.0038522947216032724",
            "extra": "mean: 102.00119536363869 msec\nrounds: 11"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 17.511576443507135,
            "unit": "iter/sec",
            "range": "stddev: 0.00040767045335550776",
            "extra": "mean: 57.10508150000256 msec\nrounds: 18"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 22.184678565543123,
            "unit": "iter/sec",
            "range": "stddev: 0.0006909808597691607",
            "extra": "mean: 45.076154565213464 msec\nrounds: 23"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 1.8747599175419558,
            "unit": "iter/sec",
            "range": "stddev: 0.003982045261043868",
            "extra": "mean: 533.4016321999911 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 1.8715821022600918,
            "unit": "iter/sec",
            "range": "stddev: 0.009044301535560004",
            "extra": "mean: 534.3073107999999 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 1.497170805909956,
            "unit": "iter/sec",
            "range": "stddev: 0.01654657651656923",
            "extra": "mean: 667.9264624000041 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.16872783718562429,
            "unit": "iter/sec",
            "range": "stddev: 0.1039378051040403",
            "extra": "mean: 5.9267043108 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 1.254732638206756,
            "unit": "iter/sec",
            "range": "stddev: 0.01566784385461414",
            "extra": "mean: 796.9825360000073 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.11384440105782222,
            "unit": "iter/sec",
            "range": "stddev: 0.2845132109961719",
            "extra": "mean: 8.783919021999987 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 8.077505227902842,
            "unit": "iter/sec",
            "range": "stddev: 0.009252538682227038",
            "extra": "mean: 123.8006007777762 msec\nrounds: 9"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 8.04907179941892,
            "unit": "iter/sec",
            "range": "stddev: 0.009061378034425572",
            "extra": "mean: 124.2379276666649 msec\nrounds: 9"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 1.5658796076182275,
            "unit": "iter/sec",
            "range": "stddev: 0.11222670054998525",
            "extra": "mean: 638.6187003999908 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.1866374556054911,
            "unit": "iter/sec",
            "range": "stddev: 0.08906716496661235",
            "extra": "mean: 5.357981315999996 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 1.5034839005585,
            "unit": "iter/sec",
            "range": "stddev: 0.04496702119201528",
            "extra": "mean: 665.1218543999903 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.07167883062543742,
            "unit": "iter/sec",
            "range": "stddev: 4.343796309990296",
            "extra": "mean: 13.95112045320002 sec\nrounds: 5"
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
          "id": "219bc7daea6f433228d679d0e1cf30c84f8f113b",
          "message": "Major refactor v2",
          "timestamp": "2024-01-17T13:55:59Z",
          "url": "https://github.com/alcides/GeneticEngine/pull/149/commits/219bc7daea6f433228d679d0e1cf30c84f8f113b"
        },
        "date": 1707164265610,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 17692.204610426295,
            "unit": "iter/sec",
            "range": "stddev: 0.000014912404558614336",
            "extra": "mean: 56.522068448761 usec\nrounds: 20687"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 18437.36886275572,
            "unit": "iter/sec",
            "range": "stddev: 0.000014341791154279393",
            "extra": "mean: 54.2376739025948 usec\nrounds: 22711"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 17704.67904366556,
            "unit": "iter/sec",
            "range": "stddev: 0.000015609508909949706",
            "extra": "mean: 56.48224390477067 usec\nrounds: 21328"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 128.02379347407216,
            "unit": "iter/sec",
            "range": "stddev: 0.0008850068725153352",
            "extra": "mean: 7.811048031493642 msec\nrounds: 127"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 134.41784054568706,
            "unit": "iter/sec",
            "range": "stddev: 0.00015670965078799865",
            "extra": "mean: 7.439488656716752 msec\nrounds: 134"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 131.3952771186437,
            "unit": "iter/sec",
            "range": "stddev: 0.0002629936405368665",
            "extra": "mean: 7.610623623077773 msec\nrounds: 130"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 131.75191135766386,
            "unit": "iter/sec",
            "range": "stddev: 0.00022563660045025013",
            "extra": "mean: 7.5900227153845465 msec\nrounds: 130"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 132.66832677894263,
            "unit": "iter/sec",
            "range": "stddev: 0.00015027913106606522",
            "extra": "mean: 7.537594121212072 msec\nrounds: 132"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 130.7904917218288,
            "unit": "iter/sec",
            "range": "stddev: 0.0006464876601641349",
            "extra": "mean: 7.645815738095439 msec\nrounds: 84"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 89.34734525127406,
            "unit": "iter/sec",
            "range": "stddev: 0.00018944482858990728",
            "extra": "mean: 11.192274344443831 msec\nrounds: 90"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 9.928034467023519,
            "unit": "iter/sec",
            "range": "stddev: 0.000510789685061114",
            "extra": "mean: 100.72487190909256 msec\nrounds: 11"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 17.512190797862324,
            "unit": "iter/sec",
            "range": "stddev: 0.0004907123467402042",
            "extra": "mean: 57.10307816667163 msec\nrounds: 18"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 22.354032890057113,
            "unit": "iter/sec",
            "range": "stddev: 0.001451681027957582",
            "extra": "mean: 44.734657272728256 msec\nrounds: 22"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 1.8803169428393063,
            "unit": "iter/sec",
            "range": "stddev: 0.00456417359596139",
            "extra": "mean: 531.8252350000023 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 1.8561544612032073,
            "unit": "iter/sec",
            "range": "stddev: 0.012281285599472933",
            "extra": "mean: 538.7482673999955 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 1.5579603159115283,
            "unit": "iter/sec",
            "range": "stddev: 0.014243539433828934",
            "extra": "mean: 641.8648727999994 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.18121559078045069,
            "unit": "iter/sec",
            "range": "stddev: 0.07988186432037214",
            "extra": "mean: 5.518288993200019 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 1.3017272841408214,
            "unit": "iter/sec",
            "range": "stddev: 0.009296201276433767",
            "extra": "mean: 768.2100637999838 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.11392358233228887,
            "unit": "iter/sec",
            "range": "stddev: 0.6784975689398469",
            "extra": "mean: 8.77781386019999 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 8.069240966068442,
            "unit": "iter/sec",
            "range": "stddev: 0.009120875288102848",
            "extra": "mean: 123.92739344444534 msec\nrounds: 9"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 8.055744888186432,
            "unit": "iter/sec",
            "range": "stddev: 0.009218740972121638",
            "extra": "mean: 124.13501344443982 msec\nrounds: 9"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 1.5907739013029856,
            "unit": "iter/sec",
            "range": "stddev: 0.11231965934230613",
            "extra": "mean: 628.6248467999826 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.19254787429697803,
            "unit": "iter/sec",
            "range": "stddev: 0.13066337869692896",
            "extra": "mean: 5.19351358020001 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 1.5103362743143947,
            "unit": "iter/sec",
            "range": "stddev: 0.044077813866733165",
            "extra": "mean: 662.1042062000015 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.053237418245226625,
            "unit": "iter/sec",
            "range": "stddev: 10.27199760911095",
            "extra": "mean: 18.78378090000001 sec\nrounds: 5"
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
          "id": "9832d41bec332f06e1ecf4aa57f30ba13f1d74ec",
          "message": "Major refactor v2",
          "timestamp": "2024-01-17T13:55:59Z",
          "url": "https://github.com/alcides/GeneticEngine/pull/149/commits/9832d41bec332f06e1ecf4aa57f30ba13f1d74ec"
        },
        "date": 1707216132573,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 16948.30149790648,
            "unit": "iter/sec",
            "range": "stddev: 0.000017414230045168424",
            "extra": "mean: 59.00296263454624 usec\nrounds: 20420"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 18075.15324312498,
            "unit": "iter/sec",
            "range": "stddev: 0.000014324821135906141",
            "extra": "mean: 55.32456552645591 usec\nrounds: 22365"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 17502.463788675115,
            "unit": "iter/sec",
            "range": "stddev: 0.000015520971364532738",
            "extra": "mean: 57.134813251094684 usec\nrounds: 20391"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 132.11284501961282,
            "unit": "iter/sec",
            "range": "stddev: 0.00017715391387734534",
            "extra": "mean: 7.569286694655201 msec\nrounds: 131"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 129.1524254513033,
            "unit": "iter/sec",
            "range": "stddev: 0.0006706173500819207",
            "extra": "mean: 7.742789161764898 msec\nrounds: 136"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 130.6385339426117,
            "unit": "iter/sec",
            "range": "stddev: 0.00016579747617598007",
            "extra": "mean: 7.654709294573764 msec\nrounds: 129"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 130.35122020836644,
            "unit": "iter/sec",
            "range": "stddev: 0.00023511225806581432",
            "extra": "mean: 7.671581427481078 msec\nrounds: 131"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 131.16932661490827,
            "unit": "iter/sec",
            "range": "stddev: 0.00014774804794066",
            "extra": "mean: 7.6237335801519865 msec\nrounds: 131"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 131.08432195639412,
            "unit": "iter/sec",
            "range": "stddev: 0.00030698738826010917",
            "extra": "mean: 7.628677366410418 msec\nrounds: 131"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 85.84477106155883,
            "unit": "iter/sec",
            "range": "stddev: 0.0014154849678400358",
            "extra": "mean: 11.648933157302094 msec\nrounds: 89"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 9.976455736781727,
            "unit": "iter/sec",
            "range": "stddev: 0.0007534059892375177",
            "extra": "mean: 100.23599827272794 msec\nrounds: 11"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 17.872918597968802,
            "unit": "iter/sec",
            "range": "stddev: 0.0008750978277298551",
            "extra": "mean: 55.95057094444814 msec\nrounds: 18"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 22.736711369172266,
            "unit": "iter/sec",
            "range": "stddev: 0.000923322604525583",
            "extra": "mean: 43.981734375001004 msec\nrounds: 24"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 1.870680303144867,
            "unit": "iter/sec",
            "range": "stddev: 0.0025565445190377993",
            "extra": "mean: 534.5648844000038 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 1.894394907653075,
            "unit": "iter/sec",
            "range": "stddev: 0.0031988794964855492",
            "extra": "mean: 527.8730406000079 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 1.5506876946369073,
            "unit": "iter/sec",
            "range": "stddev: 0.014845020537925937",
            "extra": "mean: 644.8751759999936 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.1876683528034095,
            "unit": "iter/sec",
            "range": "stddev: 0.04631018352920526",
            "extra": "mean: 5.328548927200006 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 1.3092649437477326,
            "unit": "iter/sec",
            "range": "stddev: 0.0030698675605862415",
            "extra": "mean: 763.7873485999933 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.11818379084892663,
            "unit": "iter/sec",
            "range": "stddev: 0.8794557288154773",
            "extra": "mean: 8.461397225600013 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 8.100514860624074,
            "unit": "iter/sec",
            "range": "stddev: 0.00912676915801558",
            "extra": "mean: 123.44894333333262 msec\nrounds: 9"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 7.959347360967205,
            "unit": "iter/sec",
            "range": "stddev: 0.008831041396900094",
            "extra": "mean: 125.63844177777936 msec\nrounds: 9"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 1.599487722726028,
            "unit": "iter/sec",
            "range": "stddev: 0.10819955163224416",
            "extra": "mean: 625.2001724000024 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.19418560253614361,
            "unit": "iter/sec",
            "range": "stddev: 0.05627254347261222",
            "extra": "mean: 5.149712372799991 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 1.4993116636163426,
            "unit": "iter/sec",
            "range": "stddev: 0.04496378739872316",
            "extra": "mean: 666.9727343999966 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.04628835317417497,
            "unit": "iter/sec",
            "range": "stddev: 12.35625789211561",
            "extra": "mean: 21.603706579000015 sec\nrounds: 5"
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
          "id": "644c591366beed1cc3e2db9d987cee917eeef51d",
          "message": "Major refactor v2",
          "timestamp": "2024-01-17T13:55:59Z",
          "url": "https://github.com/alcides/GeneticEngine/pull/149/commits/644c591366beed1cc3e2db9d987cee917eeef51d"
        },
        "date": 1707219681510,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 17785.84203269908,
            "unit": "iter/sec",
            "range": "stddev: 0.000014674478022834063",
            "extra": "mean: 56.224495762500915 usec\nrounds: 20649"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 18421.957563651988,
            "unit": "iter/sec",
            "range": "stddev: 0.000014574906985928878",
            "extra": "mean: 54.283047637297834 usec\nrounds: 23343"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 17246.28807410842,
            "unit": "iter/sec",
            "range": "stddev: 0.00001817748081878887",
            "extra": "mean: 57.983491618772405 usec\nrounds: 21596"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 128.57221499089644,
            "unit": "iter/sec",
            "range": "stddev: 0.0008217427872800557",
            "extra": "mean: 7.777730204545399 msec\nrounds: 132"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 132.71505485418766,
            "unit": "iter/sec",
            "range": "stddev: 0.00025931387175179125",
            "extra": "mean: 7.53494018518613 msec\nrounds: 135"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 131.8729712444203,
            "unit": "iter/sec",
            "range": "stddev: 0.0001849514401809234",
            "extra": "mean: 7.583055045802732 msec\nrounds: 131"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 131.6328212339699,
            "unit": "iter/sec",
            "range": "stddev: 0.00023924738568492174",
            "extra": "mean: 7.596889519085492 msec\nrounds: 131"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 131.63809751162918,
            "unit": "iter/sec",
            "range": "stddev: 0.00014996848827305117",
            "extra": "mean: 7.59658502290082 msec\nrounds: 131"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 127.18880578614726,
            "unit": "iter/sec",
            "range": "stddev: 0.0010641717962494455",
            "extra": "mean: 7.862327142857055 msec\nrounds: 133"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 89.33552424668625,
            "unit": "iter/sec",
            "range": "stddev: 0.00005028788853998302",
            "extra": "mean: 11.193755322223828 msec\nrounds: 90"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 10.30724707901842,
            "unit": "iter/sec",
            "range": "stddev: 0.0008917215468650377",
            "extra": "mean: 97.01911600000491 msec\nrounds: 11"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 18.124535025189697,
            "unit": "iter/sec",
            "range": "stddev: 0.0006038841044631731",
            "extra": "mean: 55.173829210525284 msec\nrounds: 19"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 22.887927468353855,
            "unit": "iter/sec",
            "range": "stddev: 0.00295755614270104",
            "extra": "mean: 43.69115558333784 msec\nrounds: 24"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 1.884502262032519,
            "unit": "iter/sec",
            "range": "stddev: 0.004022059040990224",
            "extra": "mean: 530.644096399999 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 1.883854801642508,
            "unit": "iter/sec",
            "range": "stddev: 0.007066342784528369",
            "extra": "mean: 530.8264729999962 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 1.570823816018141,
            "unit": "iter/sec",
            "range": "stddev: 0.01387745849717145",
            "extra": "mean: 636.6086316000008 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.1928198453929902,
            "unit": "iter/sec",
            "range": "stddev: 0.018410753218363198",
            "extra": "mean: 5.186188164200002 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 1.322502502302368,
            "unit": "iter/sec",
            "range": "stddev: 0.006359665518440513",
            "extra": "mean: 756.1422365999931 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.1087008378300889,
            "unit": "iter/sec",
            "range": "stddev: 0.34526491390815517",
            "extra": "mean: 9.199561107 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 8.0881592099141,
            "unit": "iter/sec",
            "range": "stddev: 0.008153531922534705",
            "extra": "mean: 123.63752666666666 msec\nrounds: 9"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 7.990445359262105,
            "unit": "iter/sec",
            "range": "stddev: 0.00902034706091558",
            "extra": "mean: 125.1494697777831 msec\nrounds: 9"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 1.5864021959659036,
            "unit": "iter/sec",
            "range": "stddev: 0.1095917182142615",
            "extra": "mean: 630.3571708000163 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.19446285665442423,
            "unit": "iter/sec",
            "range": "stddev: 0.11561131687582966",
            "extra": "mean: 5.142370204799977 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 1.5278803698516632,
            "unit": "iter/sec",
            "range": "stddev: 0.047242610056099296",
            "extra": "mean: 654.5015040000067 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.0642505634220251,
            "unit": "iter/sec",
            "range": "stddev: 4.613583779240293",
            "extra": "mean: 15.564065849999997 sec\nrounds: 5"
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
          "id": "240d0b06419332f8c9375df3427aa88f1b1e4e42",
          "message": "Major refactor v2",
          "timestamp": "2024-01-17T13:55:59Z",
          "url": "https://github.com/alcides/GeneticEngine/pull/149/commits/240d0b06419332f8c9375df3427aa88f1b1e4e42"
        },
        "date": 1707220068064,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 17423.596160833626,
            "unit": "iter/sec",
            "range": "stddev: 0.000014716491136325466",
            "extra": "mean: 57.39343306451814 usec\nrounds: 19840"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 18156.78444196073,
            "unit": "iter/sec",
            "range": "stddev: 0.000014072541848828181",
            "extra": "mean: 55.07583147206274 usec\nrounds: 21670"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 17620.659988613897,
            "unit": "iter/sec",
            "range": "stddev: 0.000015467025212915305",
            "extra": "mean: 56.751563258480616 usec\nrounds: 20930"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 131.7018689815348,
            "unit": "iter/sec",
            "range": "stddev: 0.00016334563779578557",
            "extra": "mean: 7.5929066742416875 msec\nrounds: 132"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 133.6222132923013,
            "unit": "iter/sec",
            "range": "stddev: 0.00015622290616615779",
            "extra": "mean: 7.483785632352008 msec\nrounds: 136"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 131.7894039751876,
            "unit": "iter/sec",
            "range": "stddev: 0.00019947008642730754",
            "extra": "mean: 7.587863438461813 msec\nrounds: 130"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 131.79579199884392,
            "unit": "iter/sec",
            "range": "stddev: 0.00017502567087284302",
            "extra": "mean: 7.587495661536536 msec\nrounds: 130"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 132.2429189277176,
            "unit": "iter/sec",
            "range": "stddev: 0.00014955591129741364",
            "extra": "mean: 7.56184155725259 msec\nrounds: 131"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 132.15388910711002,
            "unit": "iter/sec",
            "range": "stddev: 0.00017223832215934617",
            "extra": "mean: 7.566935840908211 msec\nrounds: 132"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 91.0170385716501,
            "unit": "iter/sec",
            "range": "stddev: 0.00007236065159369086",
            "extra": "mean: 10.986953824176378 msec\nrounds: 91"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 10.176943434659497,
            "unit": "iter/sec",
            "range": "stddev: 0.005869861326070474",
            "extra": "mean: 98.26133027273313 msec\nrounds: 11"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 18.195895780481273,
            "unit": "iter/sec",
            "range": "stddev: 0.0003780387556163834",
            "extra": "mean: 54.95744821052995 msec\nrounds: 19"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 23.254918345212044,
            "unit": "iter/sec",
            "range": "stddev: 0.00038066926866528217",
            "extra": "mean: 43.00165604347907 msec\nrounds: 23"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 1.8791765007794443,
            "unit": "iter/sec",
            "range": "stddev: 0.0016490855530382747",
            "extra": "mean: 532.1479911999859 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 1.876849130649626,
            "unit": "iter/sec",
            "range": "stddev: 0.0046596177054476235",
            "extra": "mean: 532.807876600009 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 1.5645831446706646,
            "unit": "iter/sec",
            "range": "stddev: 0.016018346720034323",
            "extra": "mean: 639.1478800000073 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.18950157711522111,
            "unit": "iter/sec",
            "range": "stddev: 0.04539470077407522",
            "extra": "mean: 5.277000937000002 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 1.3060278500027278,
            "unit": "iter/sec",
            "range": "stddev: 0.007792052810250071",
            "extra": "mean: 765.6804562000048 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.11706494075435163,
            "unit": "iter/sec",
            "range": "stddev: 0.3898015550844493",
            "extra": "mean: 8.542267168599983 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 8.070018551142972,
            "unit": "iter/sec",
            "range": "stddev: 0.008764321147926241",
            "extra": "mean: 123.9154524444517 msec\nrounds: 9"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 7.957828087769956,
            "unit": "iter/sec",
            "range": "stddev: 0.009294572669759537",
            "extra": "mean: 125.66242811111452 msec\nrounds: 9"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 1.5874613569718512,
            "unit": "iter/sec",
            "range": "stddev: 0.10952915076893797",
            "extra": "mean: 629.9365938000165 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.1975067524639521,
            "unit": "iter/sec",
            "range": "stddev: 0.08174471247019309",
            "extra": "mean: 5.063118032799991 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 1.4957302523744451,
            "unit": "iter/sec",
            "range": "stddev: 0.04995208369431143",
            "extra": "mean: 668.5697494000124 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.049363309961277725,
            "unit": "iter/sec",
            "range": "stddev: 8.21860308133945",
            "extra": "mean: 20.25796083739997 sec\nrounds: 5"
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
          "id": "4214303d801bc6ebcb400da067b18b91915f68f3",
          "message": "Major refactor v2",
          "timestamp": "2024-01-17T13:55:59Z",
          "url": "https://github.com/alcides/GeneticEngine/pull/149/commits/4214303d801bc6ebcb400da067b18b91915f68f3"
        },
        "date": 1707220202198,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 17177.88225096251,
            "unit": "iter/sec",
            "range": "stddev: 0.00001521934217909056",
            "extra": "mean: 58.214393683131 usec\nrounds: 20580"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 18067.178343745745,
            "unit": "iter/sec",
            "range": "stddev: 0.000014315030137191526",
            "extra": "mean: 55.348985933166844 usec\nrounds: 21540"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 17388.953009076893,
            "unit": "iter/sec",
            "range": "stddev: 0.00001620210279226179",
            "extra": "mean: 57.5077751649572 usec\nrounds: 13779"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 127.8395466674146,
            "unit": "iter/sec",
            "range": "stddev: 0.0004100491489245367",
            "extra": "mean: 7.822305585935663 msec\nrounds: 128"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 130.09145785525882,
            "unit": "iter/sec",
            "range": "stddev: 0.0006090462953976973",
            "extra": "mean: 7.686899789474348 msec\nrounds: 114"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 130.5424847784286,
            "unit": "iter/sec",
            "range": "stddev: 0.00025253171867278004",
            "extra": "mean: 7.660341395349665 msec\nrounds: 129"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 129.6018369752167,
            "unit": "iter/sec",
            "range": "stddev: 0.00016973028031409465",
            "extra": "mean: 7.715940015504768 msec\nrounds: 129"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 129.86307834387128,
            "unit": "iter/sec",
            "range": "stddev: 0.00022761628439353212",
            "extra": "mean: 7.7004181076937614 msec\nrounds: 130"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 126.1673172572411,
            "unit": "iter/sec",
            "range": "stddev: 0.0004107973658377288",
            "extra": "mean: 7.925982906976706 msec\nrounds: 129"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 87.84852342355504,
            "unit": "iter/sec",
            "range": "stddev: 0.0003949136169202354",
            "extra": "mean: 11.383230600001953 msec\nrounds: 85"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 10.134517906889002,
            "unit": "iter/sec",
            "range": "stddev: 0.0012114201907352353",
            "extra": "mean: 98.67267581818014 msec\nrounds: 11"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 17.472923649310097,
            "unit": "iter/sec",
            "range": "stddev: 0.0006558571841892752",
            "extra": "mean: 57.231406722222125 msec\nrounds: 18"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 22.28872423809855,
            "unit": "iter/sec",
            "range": "stddev: 0.00020889921825085892",
            "extra": "mean: 44.86573521739214 msec\nrounds: 23"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 1.8886547333911214,
            "unit": "iter/sec",
            "range": "stddev: 0.0023932409510888054",
            "extra": "mean: 529.4774011999948 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 1.7928973425841066,
            "unit": "iter/sec",
            "range": "stddev: 0.008192893420854417",
            "extra": "mean: 557.7564181999946 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 1.4938541204221816,
            "unit": "iter/sec",
            "range": "stddev: 0.019065381420888317",
            "extra": "mean: 669.4094063999955 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.170263148686619,
            "unit": "iter/sec",
            "range": "stddev: 0.05940594557494766",
            "extra": "mean: 5.8732615232 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 1.27377345134906,
            "unit": "iter/sec",
            "range": "stddev: 0.012565630434621354",
            "extra": "mean: 785.0689610000074 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.1094986632584082,
            "unit": "iter/sec",
            "range": "stddev: 0.9240998633178137",
            "extra": "mean: 9.132531578399995 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 7.845503274089355,
            "unit": "iter/sec",
            "range": "stddev: 0.009156720433708227",
            "extra": "mean: 127.46154899999989 msec\nrounds: 9"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 7.7564068506628505,
            "unit": "iter/sec",
            "range": "stddev: 0.011867919734216923",
            "extra": "mean: 128.92567644444046 msec\nrounds: 9"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 1.5650853767610422,
            "unit": "iter/sec",
            "range": "stddev: 0.11204685622500873",
            "extra": "mean: 638.9427790000241 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.19064973976226093,
            "unit": "iter/sec",
            "range": "stddev: 0.1171618483503069",
            "extra": "mean: 5.245220902199992 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 1.4747476621804219,
            "unit": "iter/sec",
            "range": "stddev: 0.05019384531820302",
            "extra": "mean: 678.082105600015 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.031503527519498344,
            "unit": "iter/sec",
            "range": "stddev: 17.955214218848692",
            "extra": "mean: 31.7424770728 sec\nrounds: 5"
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
          "id": "af3ffe67df10cc56b51a20c2a6e36341d6cc4426",
          "message": "Major refactor v2",
          "timestamp": "2024-01-17T13:55:59Z",
          "url": "https://github.com/alcides/GeneticEngine/pull/149/commits/af3ffe67df10cc56b51a20c2a6e36341d6cc4426"
        },
        "date": 1707220468996,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 15927.668392659134,
            "unit": "iter/sec",
            "range": "stddev: 0.000019615084103495738",
            "extra": "mean: 62.783828451682716 usec\nrounds: 21475"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 16617.353845015634,
            "unit": "iter/sec",
            "range": "stddev: 0.000018781033728244117",
            "extra": "mean: 60.17805297562159 usec\nrounds: 22029"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 14738.735506144558,
            "unit": "iter/sec",
            "range": "stddev: 0.00002271555981090029",
            "extra": "mean: 67.84842563889565 usec\nrounds: 18901"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 114.37697415614396,
            "unit": "iter/sec",
            "range": "stddev: 0.00020954505562782082",
            "extra": "mean: 8.74301849107173 msec\nrounds: 112"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 114.59484658577497,
            "unit": "iter/sec",
            "range": "stddev: 0.00023156870429186146",
            "extra": "mean: 8.726395905172694 msec\nrounds: 116"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 108.56889390532982,
            "unit": "iter/sec",
            "range": "stddev: 0.00023691098871028127",
            "extra": "mean: 9.210741346153739 msec\nrounds: 104"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 107.97666774772223,
            "unit": "iter/sec",
            "range": "stddev: 0.00032143623827714593",
            "extra": "mean: 9.261260056074429 msec\nrounds: 107"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 110.92021708739206,
            "unit": "iter/sec",
            "range": "stddev: 0.0010186827742504343",
            "extra": "mean: 9.015489026785062 msec\nrounds: 112"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 114.94115437255134,
            "unit": "iter/sec",
            "range": "stddev: 0.0002605674426462864",
            "extra": "mean: 8.700104026785434 msec\nrounds: 112"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 58.205583824833234,
            "unit": "iter/sec",
            "range": "stddev: 0.00033108062256717173",
            "extra": "mean: 17.180482254236114 msec\nrounds: 59"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 6.767360079931234,
            "unit": "iter/sec",
            "range": "stddev: 0.0009496973117107234",
            "extra": "mean: 147.76810871428634 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 12.134134663496939,
            "unit": "iter/sec",
            "range": "stddev: 0.0010939506393675459",
            "extra": "mean: 82.41213961538563 msec\nrounds: 13"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 14.831085533681028,
            "unit": "iter/sec",
            "range": "stddev: 0.0003381973401782135",
            "extra": "mean: 67.42594786666321 msec\nrounds: 15"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 1.4213277882507698,
            "unit": "iter/sec",
            "range": "stddev: 0.00812077996953367",
            "extra": "mean: 703.5674727999947 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 1.415138623048261,
            "unit": "iter/sec",
            "range": "stddev: 0.007759572407580149",
            "extra": "mean: 706.6445531999989 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 1.3166226640356609,
            "unit": "iter/sec",
            "range": "stddev: 0.026926156192941888",
            "extra": "mean: 759.5190537999997 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.14770126836777767,
            "unit": "iter/sec",
            "range": "stddev: 0.12547797454857476",
            "extra": "mean: 6.770422563399995 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 1.0724538290925614,
            "unit": "iter/sec",
            "range": "stddev: 0.014584637746528002",
            "extra": "mean: 932.4410738000097 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.09307425439103048,
            "unit": "iter/sec",
            "range": "stddev: 0.5521277417886226",
            "extra": "mean: 10.744109706200016 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 6.006337078603922,
            "unit": "iter/sec",
            "range": "stddev: 0.010637435495582201",
            "extra": "mean: 166.49082242857307 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 5.916211649138434,
            "unit": "iter/sec",
            "range": "stddev: 0.012032291023381318",
            "extra": "mean: 169.02708342857002 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 1.304983759992558,
            "unit": "iter/sec",
            "range": "stddev: 0.16058635981243435",
            "extra": "mean: 766.2930610000103 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.1565459248229554,
            "unit": "iter/sec",
            "range": "stddev: 0.1601305496678857",
            "extra": "mean: 6.387901832199998 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 1.249310773049191,
            "unit": "iter/sec",
            "range": "stddev: 0.05792266484155812",
            "extra": "mean: 800.4413485999976 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.03185275189115597,
            "unit": "iter/sec",
            "range": "stddev: 16.73276254637807",
            "extra": "mean: 31.39446172239999 sec\nrounds: 5"
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
          "id": "00cb78faf1156d12e9d996264da6b4a243cab51c",
          "message": "Major refactor v2",
          "timestamp": "2024-01-17T13:55:59Z",
          "url": "https://github.com/alcides/GeneticEngine/pull/149/commits/00cb78faf1156d12e9d996264da6b4a243cab51c"
        },
        "date": 1707221022886,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 15933.05456599078,
            "unit": "iter/sec",
            "range": "stddev: 0.00001940753068602985",
            "extra": "mean: 62.762604361784284 usec\nrounds: 22010"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 15995.897160872708,
            "unit": "iter/sec",
            "range": "stddev: 0.000021673462502201448",
            "extra": "mean: 62.516030826084766 usec\nrounds: 21962"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 15062.293394978831,
            "unit": "iter/sec",
            "range": "stddev: 0.00001996325799585711",
            "extra": "mean: 66.39095214632854 usec\nrounds: 18076"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 113.27202776776743,
            "unit": "iter/sec",
            "range": "stddev: 0.00018859429023508888",
            "extra": "mean: 8.828304919641942 msec\nrounds: 112"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 113.9640822090384,
            "unit": "iter/sec",
            "range": "stddev: 0.0002047630071513146",
            "extra": "mean: 8.774694452992234 msec\nrounds: 117"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 107.88061141492716,
            "unit": "iter/sec",
            "range": "stddev: 0.00030747877131288344",
            "extra": "mean: 9.269506233644062 msec\nrounds: 107"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 105.01617545013315,
            "unit": "iter/sec",
            "range": "stddev: 0.0011577110950118938",
            "extra": "mean: 9.522342588783852 msec\nrounds: 107"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 113.68806032885675,
            "unit": "iter/sec",
            "range": "stddev: 0.00031453295040352955",
            "extra": "mean: 8.795998428571801 msec\nrounds: 112"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 112.89678738027062,
            "unit": "iter/sec",
            "range": "stddev: 0.00019477460367215227",
            "extra": "mean: 8.857647973911753 msec\nrounds: 115"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 58.39579569512222,
            "unit": "iter/sec",
            "range": "stddev: 0.00027468466020598106",
            "extra": "mean: 17.124520491524525 msec\nrounds: 59"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 6.851669555569945,
            "unit": "iter/sec",
            "range": "stddev: 0.0004917885172823998",
            "extra": "mean: 145.94982900000883 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 12.278962778180981,
            "unit": "iter/sec",
            "range": "stddev: 0.0007716299847807964",
            "extra": "mean: 81.44010353846362 msec\nrounds: 13"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 14.837580425866731,
            "unit": "iter/sec",
            "range": "stddev: 0.0005686093457537277",
            "extra": "mean: 67.39643333334016 msec\nrounds: 15"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 1.4619624786546097,
            "unit": "iter/sec",
            "range": "stddev: 0.0025421548498492682",
            "extra": "mean: 684.0120828000067 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 1.4538136062563016,
            "unit": "iter/sec",
            "range": "stddev: 0.005798126160708474",
            "extra": "mean: 687.8460868000047 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 1.3146878576336236,
            "unit": "iter/sec",
            "range": "stddev: 0.01763181026612512",
            "extra": "mean: 760.6368266000061 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.1586233718245493,
            "unit": "iter/sec",
            "range": "stddev: 0.0186667453566323",
            "extra": "mean: 6.304241225599992 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 1.1032112623805166,
            "unit": "iter/sec",
            "range": "stddev: 0.012720221070284744",
            "extra": "mean: 906.4446984000085 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.09004514846401283,
            "unit": "iter/sec",
            "range": "stddev: 0.5638786259962297",
            "extra": "mean: 11.105540021400008 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 5.926099943813291,
            "unit": "iter/sec",
            "range": "stddev: 0.011916276122516563",
            "extra": "mean: 168.74504471426886 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 5.941703821767152,
            "unit": "iter/sec",
            "range": "stddev: 0.012305050928022492",
            "extra": "mean: 168.3018928571544 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 1.337579737739497,
            "unit": "iter/sec",
            "range": "stddev: 0.14182108120050319",
            "extra": "mean: 747.6189805999866 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.157408926898807,
            "unit": "iter/sec",
            "range": "stddev: 0.17277982832582167",
            "extra": "mean: 6.352879850600004 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 1.2536739884695054,
            "unit": "iter/sec",
            "range": "stddev: 0.055714884066641435",
            "extra": "mean: 797.6555382000129 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.03976118129109273,
            "unit": "iter/sec",
            "range": "stddev: 8.36034240969069",
            "extra": "mean: 25.150158207800008 sec\nrounds: 5"
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
          "id": "1ca3646b8d91f56b852dfeac70883138ca629a64",
          "message": "Major refactor v2",
          "timestamp": "2024-01-17T13:55:59Z",
          "url": "https://github.com/alcides/GeneticEngine/pull/149/commits/1ca3646b8d91f56b852dfeac70883138ca629a64"
        },
        "date": 1707238852078,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 15656.53870013468,
            "unit": "iter/sec",
            "range": "stddev: 0.00002283508125602882",
            "extra": "mean: 63.87107771089901 usec\nrounds: 20795"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 16685.3202172378,
            "unit": "iter/sec",
            "range": "stddev: 0.000018394655425212785",
            "extra": "mean: 59.93292229218881 usec\nrounds: 21568"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 15138.597445952895,
            "unit": "iter/sec",
            "range": "stddev: 0.000019983827392372882",
            "extra": "mean: 66.05631753999356 usec\nrounds: 19122"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 115.05710822404467,
            "unit": "iter/sec",
            "range": "stddev: 0.00018032482333458572",
            "extra": "mean: 8.691336115042562 msec\nrounds: 113"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 113.78706434574909,
            "unit": "iter/sec",
            "range": "stddev: 0.0007734862286293089",
            "extra": "mean: 8.788345193276431 msec\nrounds: 119"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 110.0435196203456,
            "unit": "iter/sec",
            "range": "stddev: 0.00021715145363050914",
            "extra": "mean: 9.087313850466057 msec\nrounds: 107"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 109.9393814423062,
            "unit": "iter/sec",
            "range": "stddev: 0.0003004395370681528",
            "extra": "mean: 9.095921651376383 msec\nrounds: 109"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 115.35026118343997,
            "unit": "iter/sec",
            "range": "stddev: 0.0002372881620696356",
            "extra": "mean: 8.669247817390836 msec\nrounds: 115"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[SMTTreeBasedRepresentation-SMTGrowInitializer]",
            "value": 115.19345410035014,
            "unit": "iter/sec",
            "range": "stddev: 0.00019829172464437726",
            "extra": "mean: 8.681048830507814 msec\nrounds: 118"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 56.94451655137083,
            "unit": "iter/sec",
            "range": "stddev: 0.000418234589567051",
            "extra": "mean: 17.560953372883223 msec\nrounds: 59"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 6.778984779568317,
            "unit": "iter/sec",
            "range": "stddev: 0.0012234104474010772",
            "extra": "mean: 147.51471385715067 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 12.203018425994292,
            "unit": "iter/sec",
            "range": "stddev: 0.0004978318121518029",
            "extra": "mean: 81.94693846154057 msec\nrounds: 13"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 14.77514981972324,
            "unit": "iter/sec",
            "range": "stddev: 0.0005037513723818189",
            "extra": "mean: 67.68120880000197 msec\nrounds: 15"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation-DefaultTBMutation]",
            "value": 1.4522472638504034,
            "unit": "iter/sec",
            "range": "stddev: 0.013207024978401531",
            "extra": "mean: 688.5879732000035 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[SMTTreeBasedRepresentation-DefaultSMTTBMutation]",
            "value": 1.4502616192486792,
            "unit": "iter/sec",
            "range": "stddev: 0.00559881513697791",
            "extra": "mean: 689.5307623999997 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation-DefaultGEMutation]",
            "value": 1.3198287501818218,
            "unit": "iter/sec",
            "range": "stddev: 0.01695675018369918",
            "extra": "mean: 757.6740542000152 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation-DefaultSGEMutation]",
            "value": 0.1557072826313272,
            "unit": "iter/sec",
            "range": "stddev: 0.04507839703509113",
            "extra": "mean: 6.422307185000011 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGEMutation]",
            "value": 1.102479192454895,
            "unit": "iter/sec",
            "range": "stddev: 0.015931020671029396",
            "extra": "mean: 907.0465971999852 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation-DefaultGEMutation]",
            "value": 0.08541997988983005,
            "unit": "iter/sec",
            "range": "stddev: 1.0886614608343135",
            "extra": "mean: 11.7068629762 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation-DefaultTBCrossover]",
            "value": 5.988659108563592,
            "unit": "iter/sec",
            "range": "stddev: 0.01026302527634247",
            "extra": "mean: 166.98228800000183 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[SMTTreeBasedRepresentation-DefaultSMTTBCrossover]",
            "value": 5.921718164801136,
            "unit": "iter/sec",
            "range": "stddev: 0.011744046488720426",
            "extra": "mean: 168.86990771428958 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation-DefaultGECrossover]",
            "value": 1.3425927097711214,
            "unit": "iter/sec",
            "range": "stddev: 0.14429389103536003",
            "extra": "mean: 744.8275211999885 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation-DefaultSGECrossover]",
            "value": 0.15709400865134998,
            "unit": "iter/sec",
            "range": "stddev: 0.1569120307183012",
            "extra": "mean: 6.365615140800003 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation-DefaultDSGECrossover]",
            "value": 1.2291773748143768,
            "unit": "iter/sec",
            "range": "stddev: 0.04724161594221999",
            "extra": "mean: 813.5522346000016 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation-DefaultGECrossover]",
            "value": 0.024804909656791007,
            "unit": "iter/sec",
            "range": "stddev: 25.842734247803342",
            "extra": "mean: 40.31459956260003 sec\nrounds: 5"
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
          "id": "064acc77134b543ccacf4d835a67d314a551936b",
          "message": "Fixed conversion to ns",
          "timestamp": "2024-02-26T19:47:14Z",
          "tree_id": "22a7c8625136526dfbd1cffc92962d8c47e62aa2",
          "url": "https://github.com/alcides/GeneticEngine/commit/064acc77134b543ccacf4d835a67d314a551936b"
        },
        "date": 1708977612610,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 15759.272944701666,
            "unit": "iter/sec",
            "range": "stddev: 0.0000205783502052126",
            "extra": "mean: 63.45470400245871 usec\nrounds: 20838"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 16450.271803731597,
            "unit": "iter/sec",
            "range": "stddev: 0.000019026626710642495",
            "extra": "mean: 60.78926913372696 usec\nrounds: 21023"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 14674.405838096094,
            "unit": "iter/sec",
            "range": "stddev: 0.000028479599506330297",
            "extra": "mean: 68.14585960297683 usec\nrounds: 18640"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 110.03602543479796,
            "unit": "iter/sec",
            "range": "stddev: 0.00022728388369196403",
            "extra": "mean: 9.087932757009218 msec\nrounds: 107"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 108.13980548587415,
            "unit": "iter/sec",
            "range": "stddev: 0.0007385307700019342",
            "extra": "mean: 9.247288688073567 msec\nrounds: 109"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 109.7673242817863,
            "unit": "iter/sec",
            "range": "stddev: 0.00024654315016523425",
            "extra": "mean: 9.11017925000045 msec\nrounds: 108"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 109.7472944600997,
            "unit": "iter/sec",
            "range": "stddev: 0.00027196620115975075",
            "extra": "mean: 9.111841935780616 msec\nrounds: 109"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 109.7156136145667,
            "unit": "iter/sec",
            "range": "stddev: 0.0002968051903479102",
            "extra": "mean: 9.114473018516957 msec\nrounds: 108"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 47.85958528917869,
            "unit": "iter/sec",
            "range": "stddev: 0.00020949963894366957",
            "extra": "mean: 20.894456020831953 msec\nrounds: 48"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 2.2897664259551513,
            "unit": "iter/sec",
            "range": "stddev: 0.0013567332315608167",
            "extra": "mean: 436.7257676000122 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 9.934754108413197,
            "unit": "iter/sec",
            "range": "stddev: 0.0009083013501560961",
            "extra": "mean: 100.65674389999799 msec\nrounds: 10"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 47.60619550480027,
            "unit": "iter/sec",
            "range": "stddev: 0.00023902379249362546",
            "extra": "mean: 21.00566931249877 msec\nrounds: 48"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation]",
            "value": 1.4627361703029802,
            "unit": "iter/sec",
            "range": "stddev: 0.010283144701428444",
            "extra": "mean: 683.650285200008 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation]",
            "value": 1.2987511613004106,
            "unit": "iter/sec",
            "range": "stddev: 0.017542578370080105",
            "extra": "mean: 769.9704376000113 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.06770315079028992,
            "unit": "iter/sec",
            "range": "stddev: 0.1631822559557243",
            "extra": "mean: 14.770361324799989 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.2762125341341246,
            "unit": "iter/sec",
            "range": "stddev: 0.041244731080877194",
            "extra": "mean: 3.620400511999992 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation]",
            "value": 0.090995773565713,
            "unit": "iter/sec",
            "range": "stddev: 0.6793538664020093",
            "extra": "mean: 10.989521390000004 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation]",
            "value": 3.766642034439184,
            "unit": "iter/sec",
            "range": "stddev: 0.22901450197724205",
            "extra": "mean: 265.4884618333237 msec\nrounds: 6"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation]",
            "value": 1.471262240431679,
            "unit": "iter/sec",
            "range": "stddev: 0.19711556156303164",
            "extra": "mean: 679.688482800043 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.07306072163125411,
            "unit": "iter/sec",
            "range": "stddev: 0.25080037058482496",
            "extra": "mean: 13.687245043200027 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.2879624148194129,
            "unit": "iter/sec",
            "range": "stddev: 0.042974324682197466",
            "extra": "mean: 3.4726754206000123 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation]",
            "value": 0.03847997006379924,
            "unit": "iter/sec",
            "range": "stddev: 17.36812171340256",
            "extra": "mean: 25.98754620500001 sec\nrounds: 5"
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
          "id": "e0f49aeac62b1f8a96cf3148b1ad7accfee86b28",
          "message": "Lexicase only works for MultiObjective",
          "timestamp": "2024-02-27T15:13:34Z",
          "tree_id": "5f1525e4516470b194c4a139872fafcea3e4cf84",
          "url": "https://github.com/alcides/GeneticEngine/commit/e0f49aeac62b1f8a96cf3148b1ad7accfee86b28"
        },
        "date": 1709047566834,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 15674.527310110445,
            "unit": "iter/sec",
            "range": "stddev: 0.000019858418195553858",
            "extra": "mean: 63.79777713328402 usec\nrounds: 20860"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 16219.298195671117,
            "unit": "iter/sec",
            "range": "stddev: 0.000019051386464264207",
            "extra": "mean: 61.65494881072579 usec\nrounds: 19633"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 14713.17873219675,
            "unit": "iter/sec",
            "range": "stddev: 0.00002136487020442527",
            "extra": "mean: 67.96627827348462 usec\nrounds: 17260"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 105.6315611424306,
            "unit": "iter/sec",
            "range": "stddev: 0.0005285388358225461",
            "extra": "mean: 9.466867564814539 msec\nrounds: 108"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 108.00883134208902,
            "unit": "iter/sec",
            "range": "stddev: 0.00028512485151560704",
            "extra": "mean: 9.258502175926411 msec\nrounds: 108"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 108.44091296872622,
            "unit": "iter/sec",
            "range": "stddev: 0.00024082982955120748",
            "extra": "mean: 9.221611775699404 msec\nrounds: 107"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 108.12665946079804,
            "unit": "iter/sec",
            "range": "stddev: 0.0003335256370257262",
            "extra": "mean: 9.248412972219455 msec\nrounds: 108"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 108.71766399951017,
            "unit": "iter/sec",
            "range": "stddev: 0.00023923786576774767",
            "extra": "mean: 9.198137296295343 msec\nrounds: 108"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 45.76456274250117,
            "unit": "iter/sec",
            "range": "stddev: 0.001346678628470414",
            "extra": "mean: 21.850968086958435 msec\nrounds: 46"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 2.2462420976192017,
            "unit": "iter/sec",
            "range": "stddev: 0.0023057444397452014",
            "extra": "mean: 445.18798800000354 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 9.567379168081494,
            "unit": "iter/sec",
            "range": "stddev: 0.001444468492288374",
            "extra": "mean: 104.52183220000109 msec\nrounds: 10"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 45.76293627477898,
            "unit": "iter/sec",
            "range": "stddev: 0.0005135940068472298",
            "extra": "mean: 21.85174469565501 msec\nrounds: 46"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation]",
            "value": 1.4308525791955355,
            "unit": "iter/sec",
            "range": "stddev: 0.010394401982039564",
            "extra": "mean: 698.8840181999933 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation]",
            "value": 1.2988801187322792,
            "unit": "iter/sec",
            "range": "stddev: 0.009553164522561256",
            "extra": "mean: 769.8939921999965 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.06512221135137986,
            "unit": "iter/sec",
            "range": "stddev: 0.1920005590149232",
            "extra": "mean: 15.355743904400004 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.2568217213687668,
            "unit": "iter/sec",
            "range": "stddev: 0.09689345385844537",
            "extra": "mean: 3.8937516447999885 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation]",
            "value": 0.08600908330307201,
            "unit": "iter/sec",
            "range": "stddev: 0.32887649520960993",
            "extra": "mean: 11.62667896920002 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation]",
            "value": 3.7640645896648124,
            "unit": "iter/sec",
            "range": "stddev: 0.2281623744623146",
            "extra": "mean: 265.6702551666494 msec\nrounds: 6"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation]",
            "value": 1.4496787310137151,
            "unit": "iter/sec",
            "range": "stddev: 0.19856433593564218",
            "extra": "mean: 689.808009599983 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.07258507844036033,
            "unit": "iter/sec",
            "range": "stddev: 0.17965998595809632",
            "extra": "mean: 13.776936272400008 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.28590497806108034,
            "unit": "iter/sec",
            "range": "stddev: 0.07341273626395166",
            "extra": "mean: 3.4976655768000002 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation]",
            "value": 0.06164247320733058,
            "unit": "iter/sec",
            "range": "stddev: 7.9524873548666015",
            "extra": "mean: 16.222580762400025 sec\nrounds: 5"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5fc0e3d8ae01a2813497874413bb6c76d8cbb1fc",
          "message": "Merge pull request #160 from alcides/dependabot/pip/threadpoolctl-3.4.0\n\nBump threadpoolctl from 3.3.0 to 3.4.0",
          "timestamp": "2024-03-30T14:40:12Z",
          "tree_id": "e66c33d1d18b4784ac9b3fd7e3b461693951f817",
          "url": "https://github.com/alcides/GeneticEngine/commit/5fc0e3d8ae01a2813497874413bb6c76d8cbb1fc"
        },
        "date": 1711810416311,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 15367.859988963308,
            "unit": "iter/sec",
            "range": "stddev: 0.00002232141309741643",
            "extra": "mean: 65.0708687298145 usec\nrounds: 20713"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 16454.92010820781,
            "unit": "iter/sec",
            "range": "stddev: 0.000018780336862055004",
            "extra": "mean: 60.77209694267637 usec\nrounds: 21817"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 14905.637095605012,
            "unit": "iter/sec",
            "range": "stddev: 0.00002087046851433414",
            "extra": "mean: 67.08871238350852 usec\nrounds: 18024"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 109.48028501381536,
            "unit": "iter/sec",
            "range": "stddev: 0.00024942300351602664",
            "extra": "mean: 9.134064638887354 msec\nrounds: 108"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 109.44554371014937,
            "unit": "iter/sec",
            "range": "stddev: 0.0002458637655064272",
            "extra": "mean: 9.136964065420102 msec\nrounds: 107"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 106.15602567312935,
            "unit": "iter/sec",
            "range": "stddev: 0.0009785173211368393",
            "extra": "mean: 9.420096444446338 msec\nrounds: 108"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 109.75556763342512,
            "unit": "iter/sec",
            "range": "stddev: 0.00023938873004629373",
            "extra": "mean: 9.111155101852516 msec\nrounds: 108"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 109.99982744287473,
            "unit": "iter/sec",
            "range": "stddev: 0.00022922614056368435",
            "extra": "mean: 9.090923351850908 msec\nrounds: 108"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 47.274427722007864,
            "unit": "iter/sec",
            "range": "stddev: 0.000258035623515295",
            "extra": "mean: 21.15308525531798 msec\nrounds: 47"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 2.2732663809494347,
            "unit": "iter/sec",
            "range": "stddev: 0.0025651723405458998",
            "extra": "mean: 439.89565339999785 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 9.855533558190892,
            "unit": "iter/sec",
            "range": "stddev: 0.0007256704083785749",
            "extra": "mean: 101.4658408999992 msec\nrounds: 10"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 46.89187503035549,
            "unit": "iter/sec",
            "range": "stddev: 0.00010928105249541234",
            "extra": "mean: 21.325656083333183 msec\nrounds: 48"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation]",
            "value": 1.4777878687077486,
            "unit": "iter/sec",
            "range": "stddev: 0.009068855609321767",
            "extra": "mean: 676.687108599998 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation]",
            "value": 1.294865059501699,
            "unit": "iter/sec",
            "range": "stddev: 0.011581696469578259",
            "extra": "mean: 772.2812448000013 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.06814002498840949,
            "unit": "iter/sec",
            "range": "stddev: 0.10327257084808311",
            "extra": "mean: 14.67566236099999 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.2793416395431303,
            "unit": "iter/sec",
            "range": "stddev: 0.025753715219905878",
            "extra": "mean: 3.579845817599994 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation]",
            "value": 0.08764514636322152,
            "unit": "iter/sec",
            "range": "stddev: 0.6172821621556032",
            "extra": "mean: 11.409644931800006 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation]",
            "value": 3.7490371699302933,
            "unit": "iter/sec",
            "range": "stddev: 0.22751595296018262",
            "extra": "mean: 266.7351521667077 msec\nrounds: 6"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation]",
            "value": 1.4700494236995993,
            "unit": "iter/sec",
            "range": "stddev: 0.19633037536545098",
            "extra": "mean: 680.2492378000125 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.07338220168101693,
            "unit": "iter/sec",
            "range": "stddev: 0.22093479837486815",
            "extra": "mean: 13.627282598399983 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.2881418370585971,
            "unit": "iter/sec",
            "range": "stddev: 0.06278964547098101",
            "extra": "mean: 3.4705130300000064 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation]",
            "value": 0.03541211216670648,
            "unit": "iter/sec",
            "range": "stddev: 10.125905464120436",
            "extra": "mean: 28.238925576999986 sec\nrounds: 5"
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
          "id": "dd5fe694246c31c1bb17bdf12a5882fabc73ea19",
          "message": "Change GeneticStep to use Iterators",
          "timestamp": "2024-03-30T11:00:16Z",
          "url": "https://github.com/alcides/GeneticEngine/pull/164/commits/dd5fe694246c31c1bb17bdf12a5882fabc73ea19"
        },
        "date": 1711810841579,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 18745.595050424854,
            "unit": "iter/sec",
            "range": "stddev: 0.000016932519224671928",
            "extra": "mean: 53.34586591196718 usec\nrounds: 24029"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 19646.31237868931,
            "unit": "iter/sec",
            "range": "stddev: 0.000015848385210195923",
            "extra": "mean: 50.90013742653899 usec\nrounds: 25417"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 17543.686044055623,
            "unit": "iter/sec",
            "range": "stddev: 0.0000171798941162884",
            "extra": "mean: 57.000564048444815 usec\nrounds: 20555"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 129.71305570276675,
            "unit": "iter/sec",
            "range": "stddev: 0.00031697538831393824",
            "extra": "mean: 7.709324204739016 msec\nrounds: 127"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 127.41161996636822,
            "unit": "iter/sec",
            "range": "stddev: 0.0005744634215563178",
            "extra": "mean: 7.848577706365885 msec\nrounds: 126"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 130.75683513912367,
            "unit": "iter/sec",
            "range": "stddev: 0.0001940069187205349",
            "extra": "mean: 7.647783757812832 msec\nrounds: 128"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 130.32778907192412,
            "unit": "iter/sec",
            "range": "stddev: 0.0002750464462436915",
            "extra": "mean: 7.67296067186507 msec\nrounds: 128"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 130.2863189140238,
            "unit": "iter/sec",
            "range": "stddev: 0.00019530202459006323",
            "extra": "mean: 7.675402976577317 msec\nrounds: 128"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 57.665772871053846,
            "unit": "iter/sec",
            "range": "stddev: 0.00015986868990890517",
            "extra": "mean: 17.341309241377814 msec\nrounds: 58"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 2.80879147484744,
            "unit": "iter/sec",
            "range": "stddev: 0.0008740487220777419",
            "extra": "mean: 356.025005399988 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 12.040297928762348,
            "unit": "iter/sec",
            "range": "stddev: 0.0009374205415772827",
            "extra": "mean: 83.05442323077071 msec\nrounds: 13"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 58.174610883596394,
            "unit": "iter/sec",
            "range": "stddev: 0.0004388481820561394",
            "extra": "mean: 17.189629372870836 msec\nrounds: 59"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation]",
            "value": 1.7796796659105558,
            "unit": "iter/sec",
            "range": "stddev: 0.009448574703302997",
            "extra": "mean: 561.8988738000553 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation]",
            "value": 11.158909597776924,
            "unit": "iter/sec",
            "range": "stddev: 0.00012222439405556846",
            "extra": "mean: 89.61449066665257 msec\nrounds: 12"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.07900805340283772,
            "unit": "iter/sec",
            "range": "stddev: 0.0888466774839833",
            "extra": "mean: 12.656937577000008 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.3972406562547782,
            "unit": "iter/sec",
            "range": "stddev: 0.0085774548844218",
            "extra": "mean: 2.5173656931999178 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation]",
            "value": 11.169594528900776,
            "unit": "iter/sec",
            "range": "stddev: 0.0009060031437488642",
            "extra": "mean: 89.52876466666264 msec\nrounds: 12"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation]",
            "value": 5.162624431334353,
            "unit": "iter/sec",
            "range": "stddev: 0.1622461954647369",
            "extra": "mean: 193.69993174993283 msec\nrounds: 8"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation]",
            "value": 19.910414047694445,
            "unit": "iter/sec",
            "range": "stddev: 0.0002439716535086642",
            "extra": "mean: 50.224972599994544 msec\nrounds: 20"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.08580161527148342,
            "unit": "iter/sec",
            "range": "stddev: 0.04553178235819247",
            "extra": "mean: 11.654792241800077 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.3923833257505873,
            "unit": "iter/sec",
            "range": "stddev: 0.008586759841668568",
            "extra": "mean: 2.548528274199998 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation]",
            "value": 19.910386573606075,
            "unit": "iter/sec",
            "range": "stddev: 0.0006806267032247055",
            "extra": "mean: 50.22504190479334 msec\nrounds: 21"
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
          "id": "47be9527e6ba4e0b29c3f7ac4059ff5a7401c443",
          "message": "Change GeneticStep to use Iterators",
          "timestamp": "2024-03-30T11:00:16Z",
          "url": "https://github.com/alcides/GeneticEngine/pull/164/commits/47be9527e6ba4e0b29c3f7ac4059ff5a7401c443"
        },
        "date": 1711811183260,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 18491.09510246302,
            "unit": "iter/sec",
            "range": "stddev: 0.00001882995267545358",
            "extra": "mean: 54.08008527665837 usec\nrounds: 22386"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 19624.239058460655,
            "unit": "iter/sec",
            "range": "stddev: 0.000015897696359629103",
            "extra": "mean: 50.957389839218614 usec\nrounds: 25431"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 17437.362786755628,
            "unit": "iter/sec",
            "range": "stddev: 0.00001753163740873637",
            "extra": "mean: 57.34812151522935 usec\nrounds: 20129"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 131.01461487733857,
            "unit": "iter/sec",
            "range": "stddev: 0.0001864270839290381",
            "extra": "mean: 7.632736248060891 msec\nrounds: 129"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 125.69418038006243,
            "unit": "iter/sec",
            "range": "stddev: 0.0009295795826765202",
            "extra": "mean: 7.955817818902136 msec\nrounds: 127"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 130.45833042587802,
            "unit": "iter/sec",
            "range": "stddev: 0.000254592112979003",
            "extra": "mean: 7.66528282813006 msec\nrounds: 128"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 131.10375985006502,
            "unit": "iter/sec",
            "range": "stddev: 0.00019363175442353768",
            "extra": "mean: 7.627546312505729 msec\nrounds: 128"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 130.96838763530928,
            "unit": "iter/sec",
            "range": "stddev: 0.00027210957440761244",
            "extra": "mean: 7.6354303359416065 msec\nrounds: 128"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 57.786429392230275,
            "unit": "iter/sec",
            "range": "stddev: 0.0004337506112121483",
            "extra": "mean: 17.30510105084388 msec\nrounds: 59"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 2.80785498848135,
            "unit": "iter/sec",
            "range": "stddev: 0.0017827118035949924",
            "extra": "mean: 356.1437482000656 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 12.19337115013128,
            "unit": "iter/sec",
            "range": "stddev: 0.0012872002879249162",
            "extra": "mean: 82.01177407687072 msec\nrounds: 13"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 58.188263471374675,
            "unit": "iter/sec",
            "range": "stddev: 0.000745664269865019",
            "extra": "mean: 17.185596206904222 msec\nrounds: 58"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation]",
            "value": 1.7879551407477405,
            "unit": "iter/sec",
            "range": "stddev: 0.010666849098183924",
            "extra": "mean: 559.2981485999644 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation]",
            "value": 10.911962134005726,
            "unit": "iter/sec",
            "range": "stddev: 0.006402257646604155",
            "extra": "mean: 91.64254675001378 msec\nrounds: 12"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.0829667412196839,
            "unit": "iter/sec",
            "range": "stddev: 0.08532152761467945",
            "extra": "mean: 12.053022516000055 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.4037029718066642,
            "unit": "iter/sec",
            "range": "stddev: 0.012461192084011873",
            "extra": "mean: 2.4770687109999927 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation]",
            "value": 11.35754623439295,
            "unit": "iter/sec",
            "range": "stddev: 0.00024196994351618342",
            "extra": "mean: 88.04718724998868 msec\nrounds: 12"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation]",
            "value": 4.866567266381054,
            "unit": "iter/sec",
            "range": "stddev: 0.17273739642810312",
            "extra": "mean: 205.48364900001357 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation]",
            "value": 19.970438817855374,
            "unit": "iter/sec",
            "range": "stddev: 0.000502019210616022",
            "extra": "mean: 50.074012349989516 msec\nrounds: 20"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.08443962867145777,
            "unit": "iter/sec",
            "range": "stddev: 0.06603232328223486",
            "extra": "mean: 11.842780643800007 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.3930740991206588,
            "unit": "iter/sec",
            "range": "stddev: 0.05715483925135639",
            "extra": "mean: 2.544049588200005 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation]",
            "value": 20.48670369275119,
            "unit": "iter/sec",
            "range": "stddev: 0.001152314348101001",
            "extra": "mean: 48.81214738092933 msec\nrounds: 21"
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
          "id": "462bc72686e9984b264e6fec56ddec50cfe5493b",
          "message": "Change GeneticStep to use Iterators",
          "timestamp": "2024-03-30T11:00:16Z",
          "url": "https://github.com/alcides/GeneticEngine/pull/164/commits/462bc72686e9984b264e6fec56ddec50cfe5493b"
        },
        "date": 1711811258481,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 18499.4853782762,
            "unit": "iter/sec",
            "range": "stddev: 0.00001720402794129538",
            "extra": "mean: 54.05555773861105 usec\nrounds: 23823"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 19415.86074149477,
            "unit": "iter/sec",
            "range": "stddev: 0.00001617098232060459",
            "extra": "mean: 51.50428370465398 usec\nrounds: 25456"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 17404.15148628686,
            "unit": "iter/sec",
            "range": "stddev: 0.000017345365144120483",
            "extra": "mean: 57.45755550265829 usec\nrounds: 21323"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 129.2360981541959,
            "unit": "iter/sec",
            "range": "stddev: 0.00022844589319599216",
            "extra": "mean: 7.737776165347136 msec\nrounds: 127"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 129.81449163653437,
            "unit": "iter/sec",
            "range": "stddev: 0.00019853678306038503",
            "extra": "mean: 7.7033002047251 msec\nrounds: 127"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 126.68224821363921,
            "unit": "iter/sec",
            "range": "stddev: 0.0007042845679243305",
            "extra": "mean: 7.893765812504228 msec\nrounds: 128"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 128.75631643201348,
            "unit": "iter/sec",
            "range": "stddev: 0.00020345962926139206",
            "extra": "mean: 7.766609264004728 msec\nrounds: 125"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 129.50418324425846,
            "unit": "iter/sec",
            "range": "stddev: 0.00019975709125394145",
            "extra": "mean: 7.721758285706456 msec\nrounds: 126"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 57.66923894510485,
            "unit": "iter/sec",
            "range": "stddev: 0.00006151914664616805",
            "extra": "mean: 17.340266982747885 msec\nrounds: 58"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 2.80610152677275,
            "unit": "iter/sec",
            "range": "stddev: 0.002328764636855324",
            "extra": "mean: 356.36629339996944 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 12.266046267408248,
            "unit": "iter/sec",
            "range": "stddev: 0.00015246150693736497",
            "extra": "mean: 81.52586238461132 msec\nrounds: 13"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 57.865425966525414,
            "unit": "iter/sec",
            "range": "stddev: 0.00033191985686176954",
            "extra": "mean: 17.281476517229656 msec\nrounds: 58"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation]",
            "value": 1.757521495495073,
            "unit": "iter/sec",
            "range": "stddev: 0.008881640015356249",
            "extra": "mean: 568.9830835999601 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation]",
            "value": 11.238538036318854,
            "unit": "iter/sec",
            "range": "stddev: 0.0002922817804817261",
            "extra": "mean: 88.97954491663995 msec\nrounds: 12"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.08177108658452178,
            "unit": "iter/sec",
            "range": "stddev: 0.02678660111929722",
            "extra": "mean: 12.22926148799993 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.4033105941125664,
            "unit": "iter/sec",
            "range": "stddev: 0.022576377978161092",
            "extra": "mean: 2.479478631599977 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation]",
            "value": 11.13623238911863,
            "unit": "iter/sec",
            "range": "stddev: 0.00017532584120901598",
            "extra": "mean: 89.79697666664303 msec\nrounds: 12"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation]",
            "value": 4.830933130676227,
            "unit": "iter/sec",
            "range": "stddev: 0.1753679602769019",
            "extra": "mean: 206.9993462857188 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation]",
            "value": 19.90142862207055,
            "unit": "iter/sec",
            "range": "stddev: 0.0001237153049065411",
            "extra": "mean: 50.247648999982175 msec\nrounds: 20"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.08559211420436827,
            "unit": "iter/sec",
            "range": "stddev: 0.011886952660466063",
            "extra": "mean: 11.68331930219997 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.39055933809614185,
            "unit": "iter/sec",
            "range": "stddev: 0.006079968656208994",
            "extra": "mean: 2.5604303942000115 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation]",
            "value": 19.880471962498703,
            "unit": "iter/sec",
            "range": "stddev: 0.00015843333147891152",
            "extra": "mean: 50.300616699962575 msec\nrounds: 20"
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
          "id": "e4be17889310408936168e2e1cd2521ce34a27ab",
          "message": "Change GeneticStep to use Iterators",
          "timestamp": "2024-03-30T11:00:16Z",
          "url": "https://github.com/alcides/GeneticEngine/pull/164/commits/e4be17889310408936168e2e1cd2521ce34a27ab"
        },
        "date": 1711813245283,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 18717.630988172987,
            "unit": "iter/sec",
            "range": "stddev: 0.00001684316750686439",
            "extra": "mean: 53.42556441207036 usec\nrounds: 24250"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 19527.49857159407,
            "unit": "iter/sec",
            "range": "stddev: 0.00001591434017547428",
            "extra": "mean: 51.20983603371826 usec\nrounds: 25798"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 17649.652595265885,
            "unit": "iter/sec",
            "range": "stddev: 0.00001873927130449471",
            "extra": "mean: 56.65833900142754 usec\nrounds: 21466"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 126.31289253299983,
            "unit": "iter/sec",
            "range": "stddev: 0.0010223855779624685",
            "extra": "mean: 7.916848232564584 msec\nrounds: 129"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 130.25074154062182,
            "unit": "iter/sec",
            "range": "stddev: 0.0002464967279177921",
            "extra": "mean: 7.677499476562488 msec\nrounds: 128"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 130.33054566362577,
            "unit": "iter/sec",
            "range": "stddev: 0.00019884790782074305",
            "extra": "mean: 7.672798382820645 msec\nrounds: 128"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 130.43145479001467,
            "unit": "iter/sec",
            "range": "stddev: 0.00018952642568110248",
            "extra": "mean: 7.666862273444153 msec\nrounds: 128"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 130.77790420506426,
            "unit": "iter/sec",
            "range": "stddev: 0.00019122269647759918",
            "extra": "mean: 7.6465516562489455 msec\nrounds: 128"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 57.75961976880688,
            "unit": "iter/sec",
            "range": "stddev: 0.000590737952501906",
            "extra": "mean: 17.31313336207332 msec\nrounds: 58"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 2.7688700812193887,
            "unit": "iter/sec",
            "range": "stddev: 0.0014505163495379908",
            "extra": "mean: 361.1581514000136 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 12.166148542376703,
            "unit": "iter/sec",
            "range": "stddev: 0.0013676820789871203",
            "extra": "mean: 82.19528115383721 msec\nrounds: 13"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 57.68765274247376,
            "unit": "iter/sec",
            "range": "stddev: 0.00008062926304054073",
            "extra": "mean: 17.334732000002642 msec\nrounds: 58"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation]",
            "value": 1.7582418107956652,
            "unit": "iter/sec",
            "range": "stddev: 0.01597337916734589",
            "extra": "mean: 568.7499830000434 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation]",
            "value": 11.094308503519978,
            "unit": "iter/sec",
            "range": "stddev: 0.0002852795012484094",
            "extra": "mean: 90.13630725003925 msec\nrounds: 12"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.07650291723803575,
            "unit": "iter/sec",
            "range": "stddev: 0.13289419206646727",
            "extra": "mean: 13.071396962400012 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.3881622464636219,
            "unit": "iter/sec",
            "range": "stddev: 0.020911308192258293",
            "extra": "mean: 2.57624230360002 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation]",
            "value": 10.99795717344499,
            "unit": "iter/sec",
            "range": "stddev: 0.0003107198343615774",
            "extra": "mean: 90.92597690910638 msec\nrounds: 11"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation]",
            "value": 4.798810391906712,
            "unit": "iter/sec",
            "range": "stddev: 0.17413285449550753",
            "extra": "mean: 208.3849784285121 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation]",
            "value": 19.823308527460707,
            "unit": "iter/sec",
            "range": "stddev: 0.00020680691238861933",
            "extra": "mean: 50.44566594999651 msec\nrounds: 20"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.08158548372848869,
            "unit": "iter/sec",
            "range": "stddev: 0.07531036346958403",
            "extra": "mean: 12.257082440400017 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.3703223374235679,
            "unit": "iter/sec",
            "range": "stddev: 0.017406217874486735",
            "extra": "mean: 2.700350205599989 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation]",
            "value": 19.603611716881737,
            "unit": "iter/sec",
            "range": "stddev: 0.0007810713568750784",
            "extra": "mean: 51.0110083000086 msec\nrounds: 20"
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
          "id": "d250b68508c33ca9e7a013d6b3a51b303a4c97b1",
          "message": "Change GeneticStep to use Iterators",
          "timestamp": "2024-03-30T11:00:16Z",
          "url": "https://github.com/alcides/GeneticEngine/pull/164/commits/d250b68508c33ca9e7a013d6b3a51b303a4c97b1"
        },
        "date": 1711815180585,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 18374.5519157701,
            "unit": "iter/sec",
            "range": "stddev: 0.000018900251393630724",
            "extra": "mean: 54.4230958438634 usec\nrounds: 24404"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 19543.165214525834,
            "unit": "iter/sec",
            "range": "stddev: 0.00001587811231008237",
            "extra": "mean: 51.16878402362022 usec\nrounds: 25725"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 17585.42854617115,
            "unit": "iter/sec",
            "range": "stddev: 0.00001714700264150654",
            "extra": "mean: 56.865261905586515 usec\nrounds: 21756"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 129.0895403768357,
            "unit": "iter/sec",
            "range": "stddev: 0.0002210737209952333",
            "extra": "mean: 7.746561007815345 msec\nrounds: 128"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 125.37319007396303,
            "unit": "iter/sec",
            "range": "stddev: 0.0009660364821984287",
            "extra": "mean: 7.976186929678164 msec\nrounds: 128"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 129.20904912538722,
            "unit": "iter/sec",
            "range": "stddev: 0.0002300061330562126",
            "extra": "mean: 7.739396015751023 msec\nrounds: 127"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 130.23516452746082,
            "unit": "iter/sec",
            "range": "stddev: 0.0001925113872493097",
            "extra": "mean: 7.678417757817968 msec\nrounds: 128"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 129.49699832439094,
            "unit": "iter/sec",
            "range": "stddev: 0.00027442383184234873",
            "extra": "mean: 7.722186714281922 msec\nrounds: 126"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 57.73384604599867,
            "unit": "iter/sec",
            "range": "stddev: 0.00008708747873537986",
            "extra": "mean: 17.320862344823926 msec\nrounds: 58"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 2.7937787419770093,
            "unit": "iter/sec",
            "range": "stddev: 0.0016918711239221913",
            "extra": "mean: 357.9381519999515 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 12.216124816038613,
            "unit": "iter/sec",
            "range": "stddev: 0.0006254675382986175",
            "extra": "mean: 81.85901953842964 msec\nrounds: 13"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 58.42721568542767,
            "unit": "iter/sec",
            "range": "stddev: 0.000047489296264081565",
            "extra": "mean: 17.115311559325427 msec\nrounds: 59"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation]",
            "value": 1.7495535610817123,
            "unit": "iter/sec",
            "range": "stddev: 0.010834745310331278",
            "extra": "mean: 571.5743845999896 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation]",
            "value": 10.855921241877489,
            "unit": "iter/sec",
            "range": "stddev: 0.00031671105406309754",
            "extra": "mean: 92.11562774999038 msec\nrounds: 12"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.07855446228260388,
            "unit": "iter/sec",
            "range": "stddev: 0.08174288358123472",
            "extra": "mean: 12.730021579200002 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.3951092932946636,
            "unit": "iter/sec",
            "range": "stddev: 0.027687189155957737",
            "extra": "mean: 2.5309452775999945 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation]",
            "value": 11.211671530943963,
            "unit": "iter/sec",
            "range": "stddev: 0.00017194011270894988",
            "extra": "mean: 89.19276641667769 msec\nrounds: 12"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation]",
            "value": 4.829534937566056,
            "unit": "iter/sec",
            "range": "stddev: 0.17570974250172652",
            "extra": "mean: 207.0592744285997 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation]",
            "value": 19.789329252103666,
            "unit": "iter/sec",
            "range": "stddev: 0.00048558047516530174",
            "extra": "mean: 50.532283699999425 msec\nrounds: 20"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.08423663296145101,
            "unit": "iter/sec",
            "range": "stddev: 0.01738741454795935",
            "extra": "mean: 11.871319696000047 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.389576027679173,
            "unit": "iter/sec",
            "range": "stddev: 0.01567255122843317",
            "extra": "mean: 2.5668930554000324 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation]",
            "value": 19.975407343834583,
            "unit": "iter/sec",
            "range": "stddev: 0.00018042225833890492",
            "extra": "mean: 50.06155733333019 msec\nrounds: 21"
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
          "id": "b9039c38d658b7f052eb5aa1139b68935ada7b28",
          "message": "Change GeneticStep to use Iterators",
          "timestamp": "2024-03-30T11:00:16Z",
          "url": "https://github.com/alcides/GeneticEngine/pull/164/commits/b9039c38d658b7f052eb5aa1139b68935ada7b28"
        },
        "date": 1711824401929,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 18651.1813822446,
            "unit": "iter/sec",
            "range": "stddev: 0.000016881769947236694",
            "extra": "mean: 53.61590665521981 usec\nrounds: 24640"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 19012.121366540792,
            "unit": "iter/sec",
            "range": "stddev: 0.0000174377621900648",
            "extra": "mean: 52.598023162206836 usec\nrounds: 24997"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 17398.993912723152,
            "unit": "iter/sec",
            "range": "stddev: 0.000017580127471809286",
            "extra": "mean: 57.474587612145896 usec\nrounds: 20534"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 128.99202438585456,
            "unit": "iter/sec",
            "range": "stddev: 0.0002003719615098155",
            "extra": "mean: 7.7524172890619525 msec\nrounds: 128"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 128.6039635223959,
            "unit": "iter/sec",
            "range": "stddev: 0.00026897611399058795",
            "extra": "mean: 7.77581011199436 msec\nrounds: 125"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 127.9395253113187,
            "unit": "iter/sec",
            "range": "stddev: 0.0004201107947050789",
            "extra": "mean: 7.816192826780253 msec\nrounds: 127"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 129.83590598052436,
            "unit": "iter/sec",
            "range": "stddev: 0.00018974173419180235",
            "extra": "mean: 7.702029669281177 msec\nrounds: 127"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 129.96430022923414,
            "unit": "iter/sec",
            "range": "stddev: 0.00019058236437860066",
            "extra": "mean: 7.69442068503563 msec\nrounds: 127"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 58.3451084227521,
            "unit": "iter/sec",
            "range": "stddev: 0.00010011944426894364",
            "extra": "mean: 17.13939740679345 msec\nrounds: 59"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 2.8295777189593965,
            "unit": "iter/sec",
            "range": "stddev: 0.0009541790080941572",
            "extra": "mean: 353.40962480004237 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 12.287765118303332,
            "unit": "iter/sec",
            "range": "stddev: 0.00023679621405749807",
            "extra": "mean: 81.38176392307847 msec\nrounds: 13"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 57.72537821903504,
            "unit": "iter/sec",
            "range": "stddev: 0.0011569938471690522",
            "extra": "mean: 17.323403169496224 msec\nrounds: 59"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation]",
            "value": 1.7584139050307812,
            "unit": "iter/sec",
            "range": "stddev: 0.011256547602840165",
            "extra": "mean: 568.694319999986 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation]",
            "value": 10.780428078723986,
            "unit": "iter/sec",
            "range": "stddev: 0.0033655247658760847",
            "extra": "mean: 92.76069490909902 msec\nrounds: 11"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.08218320076381459,
            "unit": "iter/sec",
            "range": "stddev: 0.07126338305330213",
            "extra": "mean: 12.167936886200005 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.40530716622193097,
            "unit": "iter/sec",
            "range": "stddev: 0.017017963740494843",
            "extra": "mean: 2.4672645424000166 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation]",
            "value": 10.97875563485222,
            "unit": "iter/sec",
            "range": "stddev: 0.00030937109918129243",
            "extra": "mean: 91.0850039166083 msec\nrounds: 12"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation]",
            "value": 4.757405628384699,
            "unit": "iter/sec",
            "range": "stddev: 0.17652360475640713",
            "extra": "mean: 210.19859942855743 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation]",
            "value": 19.786520538945837,
            "unit": "iter/sec",
            "range": "stddev: 0.00013203150506907452",
            "extra": "mean: 50.53945679998151 msec\nrounds: 20"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.08486022681715039,
            "unit": "iter/sec",
            "range": "stddev: 0.04608625424272601",
            "extra": "mean: 11.784083515999964 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.3900092290840184,
            "unit": "iter/sec",
            "range": "stddev: 0.006238173458540534",
            "extra": "mean: 2.564041887799976 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation]",
            "value": 19.809286490501684,
            "unit": "iter/sec",
            "range": "stddev: 0.0003068341081329075",
            "extra": "mean: 50.481373999991774 msec\nrounds: 20"
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
          "id": "9bc5ffcdc3c4663f26c28ab8fc8d90e5afb89995",
          "message": "Change GeneticStep to use Iterators",
          "timestamp": "2024-03-30T11:00:16Z",
          "url": "https://github.com/alcides/GeneticEngine/pull/164/commits/9bc5ffcdc3c4663f26c28ab8fc8d90e5afb89995"
        },
        "date": 1711848840630,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 18610.8291481503,
            "unit": "iter/sec",
            "range": "stddev: 0.000016855128634683485",
            "extra": "mean: 53.73215733912577 usec\nrounds: 24139"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 19397.419810040778,
            "unit": "iter/sec",
            "range": "stddev: 0.000016072633745849352",
            "extra": "mean: 51.55324830792007 usec\nrounds: 25706"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 17568.75882624712,
            "unit": "iter/sec",
            "range": "stddev: 0.00001751395980967587",
            "extra": "mean: 56.91921722472703 usec\nrounds: 21480"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 125.05968134001719,
            "unit": "iter/sec",
            "range": "stddev: 0.0010152481838061904",
            "extra": "mean: 7.996182217042123 msec\nrounds: 129"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 129.43760508072174,
            "unit": "iter/sec",
            "range": "stddev: 0.0001977851833335361",
            "extra": "mean: 7.725730087298553 msec\nrounds: 126"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 129.52926878925433,
            "unit": "iter/sec",
            "range": "stddev: 0.00018769302616538258",
            "extra": "mean: 7.72026283593874 msec\nrounds: 128"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 129.43144594731604,
            "unit": "iter/sec",
            "range": "stddev: 0.00018920976381876564",
            "extra": "mean: 7.726097724404943 msec\nrounds: 127"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 128.7270004078133,
            "unit": "iter/sec",
            "range": "stddev: 0.0003346541579711574",
            "extra": "mean: 7.768378015738362 msec\nrounds: 127"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 57.44706961624754,
            "unit": "iter/sec",
            "range": "stddev: 0.0016325207757867978",
            "extra": "mean: 17.407328288111216 msec\nrounds: 59"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 2.769771631315435,
            "unit": "iter/sec",
            "range": "stddev: 0.002187923155587266",
            "extra": "mean: 361.0405957999774 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 12.095388137659581,
            "unit": "iter/sec",
            "range": "stddev: 0.0011360531725229976",
            "extra": "mean: 82.67613975003012 msec\nrounds: 12"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 58.123662975377314,
            "unit": "iter/sec",
            "range": "stddev: 0.0005595804680025687",
            "extra": "mean: 17.204696827583387 msec\nrounds: 58"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation]",
            "value": 1.629220944117576,
            "unit": "iter/sec",
            "range": "stddev: 0.014656043328976609",
            "extra": "mean: 613.7902926000152 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation]",
            "value": 2.693888131821254,
            "unit": "iter/sec",
            "range": "stddev: 0.0007939490829871792",
            "extra": "mean: 371.21066320000864 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.05549446763589314,
            "unit": "iter/sec",
            "range": "stddev: 0.10462988274503063",
            "extra": "mean: 18.01981427339997 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.27778804306452304,
            "unit": "iter/sec",
            "range": "stddev: 0.007888240903445773",
            "extra": "mean: 3.5998669668000276 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation]",
            "value": 2.739330459073345,
            "unit": "iter/sec",
            "range": "stddev: 0.0009384219378253768",
            "extra": "mean: 365.0527071999477 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation]",
            "value": 4.3235770419423,
            "unit": "iter/sec",
            "range": "stddev: 0.17792804438544702",
            "extra": "mean: 231.28996900001246 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation]",
            "value": 3.0587048997376547,
            "unit": "iter/sec",
            "range": "stddev: 0.0025750834963776457",
            "extra": "mean: 326.935756399962 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.05859629734195627,
            "unit": "iter/sec",
            "range": "stddev: 0.022269444063717513",
            "extra": "mean: 17.06592473180003 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.2746032196897147,
            "unit": "iter/sec",
            "range": "stddev: 0.008691489335555875",
            "extra": "mean: 3.6416178991999457 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation]",
            "value": 3.052550760256365,
            "unit": "iter/sec",
            "range": "stddev: 0.0014164639028288629",
            "extra": "mean: 327.59487999996963 msec\nrounds: 5"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c7a308585775a16b6a4ed141cdc49aae4b625ee6",
          "message": "Merge pull request #164 from alcides/streaming_fitnesses\n\nChange GeneticStep to use Iterators",
          "timestamp": "2024-03-31T02:34:59+01:00",
          "tree_id": "086fc38d607a6848762ee53089ebdced4c22f535",
          "url": "https://github.com/alcides/GeneticEngine/commit/c7a308585775a16b6a4ed141cdc49aae4b625ee6"
        },
        "date": 1711850293039,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 18537.14444351462,
            "unit": "iter/sec",
            "range": "stddev: 0.00001832650961177612",
            "extra": "mean: 53.94574137603264 usec\nrounds: 24584"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 19384.62324449473,
            "unit": "iter/sec",
            "range": "stddev: 0.00001599341818383073",
            "extra": "mean: 51.58728067020863 usec\nrounds: 26116"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 17145.908830366046,
            "unit": "iter/sec",
            "range": "stddev: 0.00001857333576465949",
            "extra": "mean: 58.322950967111325 usec\nrounds: 20007"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 127.9134084918417,
            "unit": "iter/sec",
            "range": "stddev: 0.00026206530833502165",
            "extra": "mean: 7.817788704018311 msec\nrounds: 125"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 127.28117911335923,
            "unit": "iter/sec",
            "range": "stddev: 0.00021023656121201616",
            "extra": "mean: 7.856621119995907 msec\nrounds: 125"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 127.6676401653867,
            "unit": "iter/sec",
            "range": "stddev: 0.00026404893474899177",
            "extra": "mean: 7.832838444452742 msec\nrounds: 126"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 127.37085238740242,
            "unit": "iter/sec",
            "range": "stddev: 0.0003195797841826405",
            "extra": "mean: 7.851089800031083 msec\nrounds: 110"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 126.04516488190262,
            "unit": "iter/sec",
            "range": "stddev: 0.0004500512370383143",
            "extra": "mean: 7.933664103156555 msec\nrounds: 126"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 58.70381857152105,
            "unit": "iter/sec",
            "range": "stddev: 0.00006397313328096547",
            "extra": "mean: 17.034666983062827 msec\nrounds: 59"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 2.8201272161306274,
            "unit": "iter/sec",
            "range": "stddev: 0.0014036098808772172",
            "extra": "mean: 354.5939325999825 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 12.303619433986283,
            "unit": "iter/sec",
            "range": "stddev: 0.000491041520943923",
            "extra": "mean: 81.27689623085224 msec\nrounds: 13"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 58.1210202918515,
            "unit": "iter/sec",
            "range": "stddev: 0.000059956480955304906",
            "extra": "mean: 17.205479101683956 msec\nrounds: 59"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation]",
            "value": 1.6170803681806483,
            "unit": "iter/sec",
            "range": "stddev: 0.010441659503014723",
            "extra": "mean: 618.3984541999507 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation]",
            "value": 2.6949639883308616,
            "unit": "iter/sec",
            "range": "stddev: 0.0028469270107697774",
            "extra": "mean: 371.06247219999204 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.05597758257707655,
            "unit": "iter/sec",
            "range": "stddev: 0.08258459908936062",
            "extra": "mean: 17.86429413280007 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.28020401411723406,
            "unit": "iter/sec",
            "range": "stddev: 0.007630941371010045",
            "extra": "mean: 3.5688282451999838 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation]",
            "value": 2.7540494022171425,
            "unit": "iter/sec",
            "range": "stddev: 0.0009851200568382775",
            "extra": "mean: 363.1016928000463 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation]",
            "value": 4.362406781326186,
            "unit": "iter/sec",
            "range": "stddev: 0.1753015620566535",
            "extra": "mean: 229.23125928572776 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation]",
            "value": 3.062193939151195,
            "unit": "iter/sec",
            "range": "stddev: 0.0010235273990061979",
            "extra": "mean: 326.563248399998 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.058622573307086534,
            "unit": "iter/sec",
            "range": "stddev: 0.02367025658635228",
            "extra": "mean: 17.05827539779998 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.27473441791688713,
            "unit": "iter/sec",
            "range": "stddev: 0.002324499084341056",
            "extra": "mean: 3.639878860400086 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation]",
            "value": 3.0614437185308145,
            "unit": "iter/sec",
            "range": "stddev: 0.0002764108217938776",
            "extra": "mean: 326.64327420002337 msec\nrounds: 5"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "134f5d3fabb17f3e0cc116a96c937bd402a25428",
          "message": "Merge pull request #165 from alcides/dependabot/pip/pytest-8.1.1\n\nBump pytest from 7.4.0 to 8.1.1",
          "timestamp": "2024-04-02T09:59:14+01:00",
          "tree_id": "97bb1dd3ec0538687acce999eb34b9732849680b",
          "url": "https://github.com/alcides/GeneticEngine/commit/134f5d3fabb17f3e0cc116a96c937bd402a25428"
        },
        "date": 1712049738507,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 18808.23382883804,
            "unit": "iter/sec",
            "range": "stddev: 0.000016672758459342524",
            "extra": "mean: 53.168203303955806 usec\nrounds: 23246"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 19595.19031457405,
            "unit": "iter/sec",
            "range": "stddev: 0.000015712357204019874",
            "extra": "mean: 51.03293124212443 usec\nrounds: 24652"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 16821.610082931285,
            "unit": "iter/sec",
            "range": "stddev: 0.00002036544561607157",
            "extra": "mean: 59.447341548755176 usec\nrounds: 21666"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 130.39254118308477,
            "unit": "iter/sec",
            "range": "stddev: 0.00018957066832179994",
            "extra": "mean: 7.669150328130314 msec\nrounds: 128"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 131.05291397913788,
            "unit": "iter/sec",
            "range": "stddev: 0.00018933652336566213",
            "extra": "mean: 7.630505645675217 msec\nrounds: 127"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 130.73945889992433,
            "unit": "iter/sec",
            "range": "stddev: 0.00018297464643441422",
            "extra": "mean: 7.648800204729766 msec\nrounds: 127"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 129.72569328830355,
            "unit": "iter/sec",
            "range": "stddev: 0.0002402615264311718",
            "extra": "mean: 7.708573179698419 msec\nrounds: 128"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 127.62667838686939,
            "unit": "iter/sec",
            "range": "stddev: 0.0007968549024093228",
            "extra": "mean: 7.835352393711461 msec\nrounds: 127"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 59.20094968579788,
            "unit": "iter/sec",
            "range": "stddev: 0.0007367279972803516",
            "extra": "mean: 16.89162091668095 msec\nrounds: 60"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 2.8504578477509885,
            "unit": "iter/sec",
            "range": "stddev: 0.0012223255405362338",
            "extra": "mean: 350.82083420002164 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 12.398754252526206,
            "unit": "iter/sec",
            "range": "stddev: 0.00034491082138988843",
            "extra": "mean: 80.65326399999041 msec\nrounds: 13"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 58.193821495886034,
            "unit": "iter/sec",
            "range": "stddev: 0.00022489424024405114",
            "extra": "mean: 17.18395483050884 msec\nrounds: 59"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation]",
            "value": 1.63931615474172,
            "unit": "iter/sec",
            "range": "stddev: 0.011133034283408037",
            "extra": "mean: 610.0104589999319 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation]",
            "value": 2.6954359603376035,
            "unit": "iter/sec",
            "range": "stddev: 0.0017121983875451575",
            "extra": "mean: 370.9974990000319 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.05576152797270631,
            "unit": "iter/sec",
            "range": "stddev: 0.10489147032433667",
            "extra": "mean: 17.93351144340004 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.27485731046864476,
            "unit": "iter/sec",
            "range": "stddev: 0.019354641426475677",
            "extra": "mean: 3.6382514196000555 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation]",
            "value": 2.745709892131467,
            "unit": "iter/sec",
            "range": "stddev: 0.002104206398576101",
            "extra": "mean: 364.2045369999778 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation]",
            "value": 4.363719414396798,
            "unit": "iter/sec",
            "range": "stddev: 0.1719200581890428",
            "extra": "mean: 229.16230514290095 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation]",
            "value": 3.0613258421724248,
            "unit": "iter/sec",
            "range": "stddev: 0.0022410063685928726",
            "extra": "mean: 326.6558516000259 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.058098583843562056,
            "unit": "iter/sec",
            "range": "stddev: 0.07503859335609431",
            "extra": "mean: 17.212123494999968 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.27060366866116875,
            "unit": "iter/sec",
            "range": "stddev: 0.00884085530959961",
            "extra": "mean: 3.695441399399988 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation]",
            "value": 3.0728831394951137,
            "unit": "iter/sec",
            "range": "stddev: 0.002179016424888236",
            "extra": "mean: 325.4272793999917 msec\nrounds: 5"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "116db180a0211e7e77ffbda026f9c1ecd5710202",
          "message": "Merge pull request #166 from alcides/dependabot/pip/seaborn-0.13.2\n\nBump seaborn from 0.12.2 to 0.13.2",
          "timestamp": "2024-04-02T09:59:32+01:00",
          "tree_id": "8753942e8b04e55fd123417f2d0d15d37b065184",
          "url": "https://github.com/alcides/GeneticEngine/commit/116db180a0211e7e77ffbda026f9c1ecd5710202"
        },
        "date": 1712049769088,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 18269.191027487224,
            "unit": "iter/sec",
            "range": "stddev: 0.000017709734584607013",
            "extra": "mean: 54.736961176629706 usec\nrounds: 23311"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 19320.367803887748,
            "unit": "iter/sec",
            "range": "stddev: 0.00001621680037609416",
            "extra": "mean: 51.75884901108221 usec\nrounds: 25174"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 17297.31676853119,
            "unit": "iter/sec",
            "range": "stddev: 0.000017486413054806394",
            "extra": "mean: 57.81243492165725 usec\nrounds: 21666"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 129.29953323817804,
            "unit": "iter/sec",
            "range": "stddev: 0.0001875886104919746",
            "extra": "mean: 7.7339799684963735 msec\nrounds: 127"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 125.23262292533254,
            "unit": "iter/sec",
            "range": "stddev: 0.0008457789357575209",
            "extra": "mean: 7.985139787387749 msec\nrounds: 127"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 130.31390448378258,
            "unit": "iter/sec",
            "range": "stddev: 0.000198832630350005",
            "extra": "mean: 7.673778204722956 msec\nrounds: 127"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 130.03150443217376,
            "unit": "iter/sec",
            "range": "stddev: 0.00019048546607986102",
            "extra": "mean: 7.690443976379693 msec\nrounds: 127"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 130.08549099639572,
            "unit": "iter/sec",
            "range": "stddev: 0.00021272602861318866",
            "extra": "mean: 7.687252377958946 msec\nrounds: 127"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 57.69091653022915,
            "unit": "iter/sec",
            "range": "stddev: 0.0004153008964980134",
            "extra": "mean: 17.33375131033003 msec\nrounds: 58"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 2.782030144856844,
            "unit": "iter/sec",
            "range": "stddev: 0.0017362499494339865",
            "extra": "mean: 359.449735599992 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 12.090762890503846,
            "unit": "iter/sec",
            "range": "stddev: 0.001329554975045011",
            "extra": "mean: 82.70776699999679 msec\nrounds: 13"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 58.316179291518786,
            "unit": "iter/sec",
            "range": "stddev: 0.00013765826418309546",
            "extra": "mean: 17.147899813550286 msec\nrounds: 59"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation]",
            "value": 1.609455008945738,
            "unit": "iter/sec",
            "range": "stddev: 0.01769845822056913",
            "extra": "mean: 621.3283344000047 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation]",
            "value": 2.688065179412663,
            "unit": "iter/sec",
            "range": "stddev: 0.0007125776179729705",
            "extra": "mean: 372.01478880006107 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.05526754473506952,
            "unit": "iter/sec",
            "range": "stddev: 0.0765244262625422",
            "extra": "mean: 18.09380179259997 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.2746427625325462,
            "unit": "iter/sec",
            "range": "stddev: 0.013379796592505534",
            "extra": "mean: 3.641093581999985 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation]",
            "value": 2.748212658673957,
            "unit": "iter/sec",
            "range": "stddev: 0.0011523134488987622",
            "extra": "mean: 363.8728600000377 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation]",
            "value": 4.326825955431374,
            "unit": "iter/sec",
            "range": "stddev: 0.1756063909489479",
            "extra": "mean: 231.11629871423898 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation]",
            "value": 3.070334599894467,
            "unit": "iter/sec",
            "range": "stddev: 0.0004290500786370796",
            "extra": "mean: 325.6974011999773 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.058283387776134635,
            "unit": "iter/sec",
            "range": "stddev: 0.035233533073106615",
            "extra": "mean: 17.15754759899992 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.27208894260417715,
            "unit": "iter/sec",
            "range": "stddev: 0.008297200106714597",
            "extra": "mean: 3.6752687941999738 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation]",
            "value": 3.06905436338085,
            "unit": "iter/sec",
            "range": "stddev: 0.00039854504233978444",
            "extra": "mean: 325.8332637999956 msec\nrounds: 5"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ec8a3acc2d61f09d264253afa564f2adec4ef2ff",
          "message": "Merge pull request #169 from alcides/dependabot/pip/z3-solver-4.13.0.0\n\nBump z3-solver from 4.12.1.0 to 4.13.0.0",
          "timestamp": "2024-04-02T09:59:48+01:00",
          "tree_id": "6f2755c2d9b401e0fce2824dd3d4ab1dfd2d6731",
          "url": "https://github.com/alcides/GeneticEngine/commit/ec8a3acc2d61f09d264253afa564f2adec4ef2ff"
        },
        "date": 1712049813048,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 18873.18070451534,
            "unit": "iter/sec",
            "range": "stddev: 0.000016635292372566864",
            "extra": "mean: 52.98523951295362 usec\nrounds: 22909"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 19769.62899108709,
            "unit": "iter/sec",
            "range": "stddev: 0.000015905537141483515",
            "extra": "mean: 50.58263867525478 usec\nrounds: 25437"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 17261.962325273787,
            "unit": "iter/sec",
            "range": "stddev: 0.000019333886812416018",
            "extra": "mean: 57.930841300462596 usec\nrounds: 21443"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 129.17413626877254,
            "unit": "iter/sec",
            "range": "stddev: 0.0002089468921333466",
            "extra": "mean: 7.74148779999814 msec\nrounds: 125"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 129.392054236678,
            "unit": "iter/sec",
            "range": "stddev: 0.00018587325704291918",
            "extra": "mean: 7.72844983333247 msec\nrounds: 126"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 128.58009520254308,
            "unit": "iter/sec",
            "range": "stddev: 0.0001932344625196677",
            "extra": "mean: 7.777253535430746 msec\nrounds: 127"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 128.176906592591,
            "unit": "iter/sec",
            "range": "stddev: 0.00019096578023924918",
            "extra": "mean: 7.80171738095139 msec\nrounds: 126"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 125.97427000140443,
            "unit": "iter/sec",
            "range": "stddev: 0.000823977179628412",
            "extra": "mean: 7.938128952752426 msec\nrounds: 127"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 58.23301007250045,
            "unit": "iter/sec",
            "range": "stddev: 0.00012379798656266344",
            "extra": "mean: 17.172390689661995 msec\nrounds: 58"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 2.742911866174249,
            "unit": "iter/sec",
            "range": "stddev: 0.0013240975218857436",
            "extra": "mean: 364.57605960004 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 10.902174249534921,
            "unit": "iter/sec",
            "range": "stddev: 0.0003765754495704348",
            "extra": "mean: 91.72482269237801 msec\nrounds: 13"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 58.06187653163535,
            "unit": "iter/sec",
            "range": "stddev: 0.000087598218734732",
            "extra": "mean: 17.22300517543804 msec\nrounds: 57"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation]",
            "value": 1.6343198898048696,
            "unit": "iter/sec",
            "range": "stddev: 0.007555694740272449",
            "extra": "mean: 611.8753165999806 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation]",
            "value": 2.652813095186638,
            "unit": "iter/sec",
            "range": "stddev: 0.005509829472037947",
            "extra": "mean: 376.95833220004715 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.054478081016716855,
            "unit": "iter/sec",
            "range": "stddev: 0.0734210062787059",
            "extra": "mean: 18.356006330199943 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.2735307055665484,
            "unit": "iter/sec",
            "range": "stddev: 0.012814873628274104",
            "extra": "mean: 3.655896686000051 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation]",
            "value": 2.7153862203662955,
            "unit": "iter/sec",
            "range": "stddev: 0.0019084588000026815",
            "extra": "mean: 368.2717369999409 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation]",
            "value": 4.410010408374873,
            "unit": "iter/sec",
            "range": "stddev: 0.17390520375471646",
            "extra": "mean: 226.7568344285402 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation]",
            "value": 3.0692943938706745,
            "unit": "iter/sec",
            "range": "stddev: 0.0009346375616254685",
            "extra": "mean: 325.8077824000793 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.05727984121212343,
            "unit": "iter/sec",
            "range": "stddev: 0.031558497326261196",
            "extra": "mean: 17.458148955000024 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.2688667383430386,
            "unit": "iter/sec",
            "range": "stddev: 0.010825354340183115",
            "extra": "mean: 3.719314654400023 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation]",
            "value": 3.0665848945857745,
            "unit": "iter/sec",
            "range": "stddev: 0.0005435556026656543",
            "extra": "mean: 326.0956518000057 msec\nrounds: 5"
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
          "id": "94f2fee9b16567e12b49f338832f66bee3597f3d",
          "message": "Pathos is now lazily imported",
          "timestamp": "2024-04-03T16:36:13+01:00",
          "tree_id": "10002dc5c920fc0e04220db978edd6045d99cb25",
          "url": "https://github.com/alcides/GeneticEngine/commit/94f2fee9b16567e12b49f338832f66bee3597f3d"
        },
        "date": 1712159963045,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 18616.70047127016,
            "unit": "iter/sec",
            "range": "stddev: 0.00001672918236186008",
            "extra": "mean: 53.715211325617524 usec\nrounds: 24086"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 19415.20207083699,
            "unit": "iter/sec",
            "range": "stddev: 0.000015848040507187267",
            "extra": "mean: 51.506031013814216 usec\nrounds: 25892"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 16962.394648517748,
            "unit": "iter/sec",
            "range": "stddev: 0.00001937470149876918",
            "extra": "mean: 58.95394021429543 usec\nrounds: 21058"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 129.00842697779575,
            "unit": "iter/sec",
            "range": "stddev: 0.0002548246313884474",
            "extra": "mean: 7.751431619053186 msec\nrounds: 126"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 129.68522776193265,
            "unit": "iter/sec",
            "range": "stddev: 0.00018656415967045303",
            "extra": "mean: 7.71097847655966 msec\nrounds: 128"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 129.2872554107133,
            "unit": "iter/sec",
            "range": "stddev: 0.0002318181186112322",
            "extra": "mean: 7.734714429687983 msec\nrounds: 128"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 129.59808653628977,
            "unit": "iter/sec",
            "range": "stddev: 0.00018932987634899081",
            "extra": "mean: 7.716163307086963 msec\nrounds: 127"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 126.00714372175001,
            "unit": "iter/sec",
            "range": "stddev: 0.0008362251596447998",
            "extra": "mean: 7.93605799214216 msec\nrounds: 127"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 58.794613950874876,
            "unit": "iter/sec",
            "range": "stddev: 0.0004388309836059286",
            "extra": "mean: 17.00836067799574 msec\nrounds: 59"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 2.8156296099705513,
            "unit": "iter/sec",
            "range": "stddev: 0.0023995762278995582",
            "extra": "mean: 355.1603507999971 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 12.236337805283211,
            "unit": "iter/sec",
            "range": "stddev: 0.0012109292838909562",
            "extra": "mean: 81.72379807692428 msec\nrounds: 13"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 58.58360518813051,
            "unit": "iter/sec",
            "range": "stddev: 0.0004643352978699229",
            "extra": "mean: 17.069622068984717 msec\nrounds: 58"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation]",
            "value": 1.6283046297134511,
            "unit": "iter/sec",
            "range": "stddev: 0.006765983273238336",
            "extra": "mean: 614.1356977999749 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation]",
            "value": 2.6839078300489856,
            "unit": "iter/sec",
            "range": "stddev: 0.004769956564078087",
            "extra": "mean: 372.5910363999901 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.05588837419457438,
            "unit": "iter/sec",
            "range": "stddev: 0.15548518934141967",
            "extra": "mean: 17.89280891439994 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.2765403977832557,
            "unit": "iter/sec",
            "range": "stddev: 0.0056746396950917615",
            "extra": "mean: 3.6161081998000553 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation]",
            "value": 2.771541307878592,
            "unit": "iter/sec",
            "range": "stddev: 0.00084166395929512",
            "extra": "mean: 360.81006519993934 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation]",
            "value": 4.1157864005635885,
            "unit": "iter/sec",
            "range": "stddev: 0.1915149065451682",
            "extra": "mean: 242.96693333333982 msec\nrounds: 6"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation]",
            "value": 3.0755723063847102,
            "unit": "iter/sec",
            "range": "stddev: 0.0016317904908014502",
            "extra": "mean: 325.1427378000699 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.05792629802473009,
            "unit": "iter/sec",
            "range": "stddev: 0.033476263946606494",
            "extra": "mean: 17.26331621559998 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.27250253517965384,
            "unit": "iter/sec",
            "range": "stddev: 0.0020194487551764327",
            "extra": "mean: 3.6696906299999226 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation]",
            "value": 3.0739571074556364,
            "unit": "iter/sec",
            "range": "stddev: 0.0006369891374895885",
            "extra": "mean: 325.3135828000268 msec\nrounds: 5"
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
          "id": "7cf6d9af830acb7f0b3c075f31956fdcfc9c185b",
          "message": "Removed unused prints",
          "timestamp": "2024-04-04T13:46:26+01:00",
          "tree_id": "0b487966f85f46a287321d5e5f8f7f22fbba3763",
          "url": "https://github.com/alcides/GeneticEngine/commit/7cf6d9af830acb7f0b3c075f31956fdcfc9c185b"
        },
        "date": 1712236410574,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 18655.05756587341,
            "unit": "iter/sec",
            "range": "stddev: 0.00001692468024141826",
            "extra": "mean: 53.604766239335966 usec\nrounds: 23862"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 19079.205662136872,
            "unit": "iter/sec",
            "range": "stddev: 0.00001754363235289042",
            "extra": "mean: 52.41308352708432 usec\nrounds: 25692"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 17454.954576607368,
            "unit": "iter/sec",
            "range": "stddev: 0.00001752101915473702",
            "extra": "mean: 57.29032382245047 usec\nrounds: 20363"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 129.3746010696276,
            "unit": "iter/sec",
            "range": "stddev: 0.00020366592955071134",
            "extra": "mean: 7.7294924330766746 msec\nrounds: 127"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 130.09900593759514,
            "unit": "iter/sec",
            "range": "stddev: 0.00020199040416425483",
            "extra": "mean: 7.686453811028135 msec\nrounds: 127"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 129.8244682415711,
            "unit": "iter/sec",
            "range": "stddev: 0.000278798526129873",
            "extra": "mean: 7.702708230156185 msec\nrounds: 126"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 126.87478765265156,
            "unit": "iter/sec",
            "range": "stddev: 0.0007698867393592574",
            "extra": "mean: 7.881786590553564 msec\nrounds: 127"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 130.25977576842627,
            "unit": "iter/sec",
            "range": "stddev: 0.00018942776838379297",
            "extra": "mean: 7.6769669999876555 msec\nrounds: 128"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 58.244673176662566,
            "unit": "iter/sec",
            "range": "stddev: 0.00009046155520556009",
            "extra": "mean: 17.168952033894822 msec\nrounds: 59"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 2.790176802655849,
            "unit": "iter/sec",
            "range": "stddev: 0.001195745064998816",
            "extra": "mean: 358.4002271999907 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 11.94309705893961,
            "unit": "iter/sec",
            "range": "stddev: 0.0013816918475096846",
            "extra": "mean: 83.73037538462296 msec\nrounds: 13"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 58.345871995300676,
            "unit": "iter/sec",
            "range": "stddev: 0.00047233951440602413",
            "extra": "mean: 17.139173103463815 msec\nrounds: 58"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation]",
            "value": 1.6160290289131192,
            "unit": "iter/sec",
            "range": "stddev: 0.008343945805383194",
            "extra": "mean: 618.8007653999648 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation]",
            "value": 2.6892244652218342,
            "unit": "iter/sec",
            "range": "stddev: 0.002756104598192465",
            "extra": "mean: 371.85441860001447 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.052614970481417354,
            "unit": "iter/sec",
            "range": "stddev: 0.14632299340818594",
            "extra": "mean: 19.00599754879995 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.2513264855077397,
            "unit": "iter/sec",
            "range": "stddev: 0.05432123556967428",
            "extra": "mean: 3.978888249599959 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation]",
            "value": 2.731600411240426,
            "unit": "iter/sec",
            "range": "stddev: 0.0010335892535174582",
            "extra": "mean: 366.08575540003585 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation]",
            "value": 4.120682066807328,
            "unit": "iter/sec",
            "range": "stddev: 0.19644576882460058",
            "extra": "mean: 242.67827116659646 msec\nrounds: 6"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation]",
            "value": 3.0726221678983245,
            "unit": "iter/sec",
            "range": "stddev: 0.0016770029951101017",
            "extra": "mean: 325.4549193999992 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.05552119687606964,
            "unit": "iter/sec",
            "range": "stddev: 0.019173263461255422",
            "extra": "mean: 18.01113910119998 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.2601318730861916,
            "unit": "iter/sec",
            "range": "stddev: 0.013543232589480722",
            "extra": "mean: 3.84420404980001 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation]",
            "value": 3.082312083251681,
            "unit": "iter/sec",
            "range": "stddev: 0.00197126045680206",
            "extra": "mean: 324.43178139997144 msec\nrounds: 5"
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
          "id": "7eae3c667d7e683a71384df3e7a15d23ec388491",
          "message": "Bumped to 0.9.0",
          "timestamp": "2024-04-04T17:43:47+01:00",
          "tree_id": "733b5f023d59f0d551bebde0baf3f626259ebec8",
          "url": "https://github.com/alcides/GeneticEngine/commit/7eae3c667d7e683a71384df3e7a15d23ec388491"
        },
        "date": 1712250426070,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 18066.74252685008,
            "unit": "iter/sec",
            "range": "stddev: 0.000018054512177622966",
            "extra": "mean: 55.35032109489796 usec\nrounds: 22878"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 18554.095705002175,
            "unit": "iter/sec",
            "range": "stddev: 0.000018560615736567363",
            "extra": "mean: 53.89645584992862 usec\nrounds: 25289"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 17326.927214245232,
            "unit": "iter/sec",
            "range": "stddev: 0.00001730262255837317",
            "extra": "mean: 57.71363771747456 usec\nrounds: 21210"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 120.8805489085632,
            "unit": "iter/sec",
            "range": "stddev: 0.0002633020931697912",
            "extra": "mean: 8.272629542379253 msec\nrounds: 118"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 120.91885962687536,
            "unit": "iter/sec",
            "range": "stddev: 0.00020979013371974183",
            "extra": "mean: 8.270008525433866 msec\nrounds: 118"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 121.2529480595798,
            "unit": "iter/sec",
            "range": "stddev: 0.00027104114953231055",
            "extra": "mean: 8.247222158331624 msec\nrounds: 120"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 119.68719447445473,
            "unit": "iter/sec",
            "range": "stddev: 0.0004050214431932277",
            "extra": "mean: 8.355112711856853 msec\nrounds: 118"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 119.889988086305,
            "unit": "iter/sec",
            "range": "stddev: 0.0003098543428882011",
            "extra": "mean: 8.340980059820607 msec\nrounds: 117"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 48.62333635882974,
            "unit": "iter/sec",
            "range": "stddev: 0.0003290404706869519",
            "extra": "mean: 20.566256346956855 msec\nrounds: 49"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 2.3985277449102207,
            "unit": "iter/sec",
            "range": "stddev: 0.0029203430560813012",
            "extra": "mean: 416.92242339995573 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 10.501913934196754,
            "unit": "iter/sec",
            "range": "stddev: 0.0010120132991691616",
            "extra": "mean: 95.22073845451732 msec\nrounds: 11"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 48.92694448816148,
            "unit": "iter/sec",
            "range": "stddev: 0.000049444463453263765",
            "extra": "mean: 20.438635816343755 msec\nrounds: 49"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation]",
            "value": 1.4864186600380485,
            "unit": "iter/sec",
            "range": "stddev: 0.010998039535513161",
            "extra": "mean: 672.7579697999772 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation]",
            "value": 2.648970698965737,
            "unit": "iter/sec",
            "range": "stddev: 0.0006656385408266544",
            "extra": "mean: 377.50511939993885 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.05448774910692885,
            "unit": "iter/sec",
            "range": "stddev: 0.13594327780669666",
            "extra": "mean: 18.352749313199958 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.2685637838615775,
            "unit": "iter/sec",
            "range": "stddev: 0.015890375280577997",
            "extra": "mean: 3.723510242600014 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation]",
            "value": 2.7079813150562733,
            "unit": "iter/sec",
            "range": "stddev: 0.00138887455497807",
            "extra": "mean: 369.27876660006405 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation]",
            "value": 4.365186882552654,
            "unit": "iter/sec",
            "range": "stddev: 0.17667715711832188",
            "extra": "mean: 229.08526642855318 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation]",
            "value": 3.0632699583028424,
            "unit": "iter/sec",
            "range": "stddev: 0.0006734996171186682",
            "extra": "mean: 326.44853820002027 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.05838348853634997,
            "unit": "iter/sec",
            "range": "stddev: 0.03315449173783813",
            "extra": "mean: 17.12813031679998 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.27465893292751714,
            "unit": "iter/sec",
            "range": "stddev: 0.010923828386816986",
            "extra": "mean: 3.6408792145999542 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation]",
            "value": 3.0839420283958137,
            "unit": "iter/sec",
            "range": "stddev: 0.0007571607204462282",
            "extra": "mean: 324.2603105999933 msec\nrounds: 5"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "217a11e021d23e16326d6f2b5e0bbeb52f48a35a",
          "message": "Merge pull request #172 from alcides/dependabot/pip/lark-1.1.9\n\nBump lark from 1.1.5 to 1.1.9",
          "timestamp": "2024-04-10T11:59:20+01:00",
          "tree_id": "82b085e3155bec9c6f06c6fda8c93afdc24ca3d7",
          "url": "https://github.com/alcides/GeneticEngine/commit/217a11e021d23e16326d6f2b5e0bbeb52f48a35a"
        },
        "date": 1712748160313,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 18242.285388100787,
            "unit": "iter/sec",
            "range": "stddev: 0.00001701401447490589",
            "extra": "mean: 54.81769299872303 usec\nrounds: 21837"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 18552.192101231478,
            "unit": "iter/sec",
            "range": "stddev: 0.000018435134295515405",
            "extra": "mean: 53.901986058759114 usec\nrounds: 24892"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 17154.49359360004,
            "unit": "iter/sec",
            "range": "stddev: 0.000017333021231043028",
            "extra": "mean: 58.293763936761025 usec\nrounds: 19715"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 127.9284748070258,
            "unit": "iter/sec",
            "range": "stddev: 0.00019863930115015174",
            "extra": "mean: 7.816867992121799 msec\nrounds: 127"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 127.15088901595331,
            "unit": "iter/sec",
            "range": "stddev: 0.00021217339142210926",
            "extra": "mean: 7.864671712004565 msec\nrounds: 125"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 127.46551951488065,
            "unit": "iter/sec",
            "range": "stddev: 0.00020671225044411752",
            "extra": "mean: 7.845258888881376 msec\nrounds: 126"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 125.64672951932936,
            "unit": "iter/sec",
            "range": "stddev: 0.0008202822505605151",
            "extra": "mean: 7.958822357140312 msec\nrounds: 126"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 128.22226834423424,
            "unit": "iter/sec",
            "range": "stddev: 0.0001953129942603747",
            "extra": "mean: 7.798957333334113 msec\nrounds: 126"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 58.36371920025078,
            "unit": "iter/sec",
            "range": "stddev: 0.000155300668769451",
            "extra": "mean: 17.133932067778563 msec\nrounds: 59"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 2.796778026467848,
            "unit": "iter/sec",
            "range": "stddev: 0.000838441932486816",
            "extra": "mean: 357.554296599983 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 11.99262681863757,
            "unit": "iter/sec",
            "range": "stddev: 0.0028370639986749777",
            "extra": "mean: 83.38456746156015 msec\nrounds: 13"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 58.9693467310938,
            "unit": "iter/sec",
            "range": "stddev: 0.000058137284259717763",
            "extra": "mean: 16.95796299999899 msec\nrounds: 59"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation]",
            "value": 1.6059802046763363,
            "unit": "iter/sec",
            "range": "stddev: 0.008630062419129033",
            "extra": "mean: 622.6726812000379 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation]",
            "value": 2.680292603834269,
            "unit": "iter/sec",
            "range": "stddev: 0.0012847026879882744",
            "extra": "mean: 373.0935937999675 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.0557830106276766,
            "unit": "iter/sec",
            "range": "stddev: 0.0991400055442851",
            "extra": "mean: 17.926605049600038 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.27731387444918987,
            "unit": "iter/sec",
            "range": "stddev: 0.008868230366167499",
            "extra": "mean: 3.606022244600035 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation]",
            "value": 2.7388980457609198,
            "unit": "iter/sec",
            "range": "stddev: 0.000302829159077562",
            "extra": "mean: 365.11034120007935 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation]",
            "value": 4.088610294859406,
            "unit": "iter/sec",
            "range": "stddev: 0.19502681437002548",
            "extra": "mean: 244.58188183336915 msec\nrounds: 6"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation]",
            "value": 3.0594643780660964,
            "unit": "iter/sec",
            "range": "stddev: 0.0010122839323796215",
            "extra": "mean: 326.8545981999978 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.05850320217616422,
            "unit": "iter/sec",
            "range": "stddev: 0.030336108090292337",
            "extra": "mean: 17.093081452000025 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.27403914046411315,
            "unit": "iter/sec",
            "range": "stddev: 0.008693701924474068",
            "extra": "mean: 3.6491137663999327 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation]",
            "value": 3.0552249053674196,
            "unit": "iter/sec",
            "range": "stddev: 0.0028170887397944346",
            "extra": "mean: 327.3081462000391 msec\nrounds: 5"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "76f5890b94e3391bea8932dae5343ebf4ac52f18",
          "message": "Merge pull request #170 from alcides/dependabot/pip/sphinx-rtd-theme-2.0.0\n\nBump sphinx-rtd-theme from 1.2.2 to 2.0.0",
          "timestamp": "2024-04-10T11:59:57+01:00",
          "tree_id": "9664029dc8b1ddbe3d3f086983a97a2185d0f21b",
          "url": "https://github.com/alcides/GeneticEngine/commit/76f5890b94e3391bea8932dae5343ebf4ac52f18"
        },
        "date": 1712748166119,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 19020.41397276101,
            "unit": "iter/sec",
            "range": "stddev: 0.000016334018889002677",
            "extra": "mean: 52.5750912378717 usec\nrounds: 24321"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 19918.07159673881,
            "unit": "iter/sec",
            "range": "stddev: 0.0000158952478489122",
            "extra": "mean: 50.20566349222934 usec\nrounds: 26882"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 17050.49232561188,
            "unit": "iter/sec",
            "range": "stddev: 0.00002115231942682199",
            "extra": "mean: 58.64933286987147 usec\nrounds: 21633"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 130.6330915399568,
            "unit": "iter/sec",
            "range": "stddev: 0.0001926530269932329",
            "extra": "mean: 7.65502820312669 msec\nrounds: 128"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 129.65985788371006,
            "unit": "iter/sec",
            "range": "stddev: 0.0003789000452992249",
            "extra": "mean: 7.71248724410052 msec\nrounds: 127"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 130.68690179086065,
            "unit": "iter/sec",
            "range": "stddev: 0.000199538513282918",
            "extra": "mean: 7.651876250003298 msec\nrounds: 128"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 130.95359990976027,
            "unit": "iter/sec",
            "range": "stddev: 0.00022955347704735216",
            "extra": "mean: 7.636292554684232 msec\nrounds: 128"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 131.61401289082028,
            "unit": "iter/sec",
            "range": "stddev: 0.0002310361761123623",
            "extra": "mean: 7.597975155043291 msec\nrounds: 129"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 59.01039488388584,
            "unit": "iter/sec",
            "range": "stddev: 0.00012173389028144136",
            "extra": "mean: 16.946166890895917 msec\nrounds: 55"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 2.8260291338768555,
            "unit": "iter/sec",
            "range": "stddev: 0.001323344658508262",
            "extra": "mean: 353.85339380000005 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 12.249861572319652,
            "unit": "iter/sec",
            "range": "stddev: 0.0002414483332985647",
            "extra": "mean: 81.63357553848982 msec\nrounds: 13"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 58.50729468402391,
            "unit": "iter/sec",
            "range": "stddev: 0.00007227822680239798",
            "extra": "mean: 17.09188581356611 msec\nrounds: 59"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation]",
            "value": 1.6581483886271655,
            "unit": "iter/sec",
            "range": "stddev: 0.009797893104858308",
            "extra": "mean: 603.0823338000118 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation]",
            "value": 2.7008216723815472,
            "unit": "iter/sec",
            "range": "stddev: 0.003775449186584264",
            "extra": "mean: 370.25769240003683 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.05636662143369241,
            "unit": "iter/sec",
            "range": "stddev: 0.043942215614921114",
            "extra": "mean: 17.74099590439996 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.2785736725878158,
            "unit": "iter/sec",
            "range": "stddev: 0.0114685017565337",
            "extra": "mean: 3.5897146730000715 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation]",
            "value": 2.7724943354403546,
            "unit": "iter/sec",
            "range": "stddev: 0.0006377636492963701",
            "extra": "mean: 360.68603900002927 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation]",
            "value": 4.192925541308943,
            "unit": "iter/sec",
            "range": "stddev: 0.19109398041450293",
            "extra": "mean: 238.49696116659894 msec\nrounds: 6"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation]",
            "value": 3.0954333396959144,
            "unit": "iter/sec",
            "range": "stddev: 0.002044980742504626",
            "extra": "mean: 323.05654500000855 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.058090414690897325,
            "unit": "iter/sec",
            "range": "stddev: 0.04054754697301056",
            "extra": "mean: 17.21454400559992 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.26842657113603857,
            "unit": "iter/sec",
            "range": "stddev: 0.019765001682169638",
            "extra": "mean: 3.725413604799951 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation]",
            "value": 3.089888307205064,
            "unit": "iter/sec",
            "range": "stddev: 0.0005001282792736235",
            "extra": "mean: 323.63629380006387 msec\nrounds: 5"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "08adb6cbff41e432aa642843c72a0da7f9bf6849",
          "message": "Merge pull request #171 from alcides/dependabot/pip/pathos-0.3.2\n\nBump pathos from 0.3.0 to 0.3.2",
          "timestamp": "2024-04-10T11:59:39+01:00",
          "tree_id": "154d3fbe44b9b720c6be94e24c44beab077483dc",
          "url": "https://github.com/alcides/GeneticEngine/commit/08adb6cbff41e432aa642843c72a0da7f9bf6849"
        },
        "date": 1712748203844,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 18716.540113944815,
            "unit": "iter/sec",
            "range": "stddev: 0.000016754903943020424",
            "extra": "mean: 53.42867826596578 usec\nrounds: 23218"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 19536.981334073844,
            "unit": "iter/sec",
            "range": "stddev: 0.000017535441566851135",
            "extra": "mean: 51.18498005912157 usec\nrounds: 24923"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 17412.49812649899,
            "unit": "iter/sec",
            "range": "stddev: 0.00001737209109941543",
            "extra": "mean: 57.43001335794332 usec\nrounds: 20812"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 127.177758358087,
            "unit": "iter/sec",
            "range": "stddev: 0.0005323715646415037",
            "extra": "mean: 7.863010112069741 msec\nrounds: 116"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 127.88654068498089,
            "unit": "iter/sec",
            "range": "stddev: 0.00040334755369971073",
            "extra": "mean: 7.819431150798506 msec\nrounds: 126"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 128.52286043319748,
            "unit": "iter/sec",
            "range": "stddev: 0.0003131383874008378",
            "extra": "mean: 7.780716960620182 msec\nrounds: 127"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 129.38819569029675,
            "unit": "iter/sec",
            "range": "stddev: 0.000208172966001753",
            "extra": "mean: 7.7286803070783785 msec\nrounds: 127"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 127.66426557997227,
            "unit": "iter/sec",
            "range": "stddev: 0.0004603887232836081",
            "extra": "mean: 7.833045492072905 msec\nrounds: 126"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 56.25156386008871,
            "unit": "iter/sec",
            "range": "stddev: 0.001289815552116935",
            "extra": "mean: 17.77728353450302 msec\nrounds: 58"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 2.7496144454884845,
            "unit": "iter/sec",
            "range": "stddev: 0.0020332798061703694",
            "extra": "mean: 363.68735319992993 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 11.910570458376833,
            "unit": "iter/sec",
            "range": "stddev: 0.0006795303166690807",
            "extra": "mean: 83.95903483335587 msec\nrounds: 12"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 57.01486964902009,
            "unit": "iter/sec",
            "range": "stddev: 0.0004939699042788145",
            "extra": "mean: 17.539284157903655 msec\nrounds: 57"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation]",
            "value": 1.6453170777856836,
            "unit": "iter/sec",
            "range": "stddev: 0.014072086748670255",
            "extra": "mean: 607.7855834000275 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation]",
            "value": 2.684465604237703,
            "unit": "iter/sec",
            "range": "stddev: 0.003743269692989165",
            "extra": "mean: 372.51361999997243 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.05466270250893919,
            "unit": "iter/sec",
            "range": "stddev: 0.035611334851863886",
            "extra": "mean: 18.29400951839998 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.2688223449936723,
            "unit": "iter/sec",
            "range": "stddev: 0.04635544503398694",
            "extra": "mean: 3.7199288623999562 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation]",
            "value": 2.625127406621409,
            "unit": "iter/sec",
            "range": "stddev: 0.016628103107252327",
            "extra": "mean: 380.9338919999391 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation]",
            "value": 4.159772819610427,
            "unit": "iter/sec",
            "range": "stddev: 0.19276399640977673",
            "extra": "mean: 240.39774366660063 msec\nrounds: 6"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation]",
            "value": 3.068704964168699,
            "unit": "iter/sec",
            "range": "stddev: 0.001854891737687285",
            "extra": "mean: 325.8703628000603 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.05773918798913262,
            "unit": "iter/sec",
            "range": "stddev: 0.032329865714564414",
            "extra": "mean: 17.319259844600083 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.26875744144573904,
            "unit": "iter/sec",
            "range": "stddev: 0.007831050973207231",
            "extra": "mean: 3.720827206199965 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation]",
            "value": 3.0409363461439956,
            "unit": "iter/sec",
            "range": "stddev: 0.002994578683970182",
            "extra": "mean: 328.8460810000288 msec\nrounds: 5"
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
          "id": "279732ae4637861f97f266e8925d7801731f410c",
          "message": "Merge branch 'main' of github.com:alcides/GeneticEngine",
          "timestamp": "2024-04-10T15:31:58+01:00",
          "tree_id": "df5ffa6cadc9193d2779f59d444b4795cc953f89",
          "url": "https://github.com/alcides/GeneticEngine/commit/279732ae4637861f97f266e8925d7801731f410c"
        },
        "date": 1712760798795,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 18668.70523400141,
            "unit": "iter/sec",
            "range": "stddev: 0.000016996083428675218",
            "extra": "mean: 53.56557873005006 usec\nrounds: 23536"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 19705.328562896986,
            "unit": "iter/sec",
            "range": "stddev: 0.000015835549636509588",
            "extra": "mean: 50.74769480793598 usec\nrounds: 22471"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 16918.633581745926,
            "unit": "iter/sec",
            "range": "stddev: 0.000020306909392867964",
            "extra": "mean: 59.10642813843626 usec\nrounds: 20734"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 128.9875685405442,
            "unit": "iter/sec",
            "range": "stddev: 0.00019626950831030986",
            "extra": "mean: 7.752685094499426 msec\nrounds: 127"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 129.29638947109902,
            "unit": "iter/sec",
            "range": "stddev: 0.00019818755140339807",
            "extra": "mean: 7.734168015755189 msec\nrounds: 127"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 128.41086766691026,
            "unit": "iter/sec",
            "range": "stddev: 0.00029728194009679077",
            "extra": "mean: 7.7875028661432095 msec\nrounds: 127"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 127.40725844831964,
            "unit": "iter/sec",
            "range": "stddev: 0.0006360803135921561",
            "extra": "mean: 7.848846385825272 msec\nrounds: 127"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 129.207966476069,
            "unit": "iter/sec",
            "range": "stddev: 0.00020281214241093935",
            "extra": "mean: 7.73946086509467 msec\nrounds: 126"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 58.02968596910054,
            "unit": "iter/sec",
            "range": "stddev: 0.0000502600014707299",
            "extra": "mean: 17.23255922033555 msec\nrounds: 59"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 2.776144840128849,
            "unit": "iter/sec",
            "range": "stddev: 0.0017787482266408573",
            "extra": "mean: 360.2117532000193 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 12.123126320468705,
            "unit": "iter/sec",
            "range": "stddev: 0.0011084873116384167",
            "extra": "mean: 82.48697353846742 msec\nrounds: 13"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 58.1578453207801,
            "unit": "iter/sec",
            "range": "stddev: 0.00018924608756859212",
            "extra": "mean: 17.194584745777966 msec\nrounds: 59"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation]",
            "value": 1.7165896459671648,
            "unit": "iter/sec",
            "range": "stddev: 0.010221841041423589",
            "extra": "mean: 582.5504087999889 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation]",
            "value": 10.234713160737833,
            "unit": "iter/sec",
            "range": "stddev: 0.0009562600981461904",
            "extra": "mean: 97.70669527272896 msec\nrounds: 11"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.07888863947486442,
            "unit": "iter/sec",
            "range": "stddev: 0.16122931864468254",
            "extra": "mean: 12.676096414599987 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.40392183240297713,
            "unit": "iter/sec",
            "range": "stddev: 0.011837687330158032",
            "extra": "mean: 2.47572653860002 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation]",
            "value": 10.364381561301231,
            "unit": "iter/sec",
            "range": "stddev: 0.00037804641139301757",
            "extra": "mean: 96.48429036362606 msec\nrounds: 11"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation]",
            "value": 4.642973036676576,
            "unit": "iter/sec",
            "range": "stddev: 0.17444949079412447",
            "extra": "mean: 215.37923914281367 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation]",
            "value": 18.441758240797167,
            "unit": "iter/sec",
            "range": "stddev: 0.0002362597777464126",
            "extra": "mean: 54.224764631594795 msec\nrounds: 19"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.08469358530078426,
            "unit": "iter/sec",
            "range": "stddev: 0.02165204820425611",
            "extra": "mean: 11.807269658599989 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.38241247548807517,
            "unit": "iter/sec",
            "range": "stddev: 0.01383637264916828",
            "extra": "mean: 2.6149774500000147 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation]",
            "value": 18.02939804754627,
            "unit": "iter/sec",
            "range": "stddev: 0.0002675430343115556",
            "extra": "mean: 55.464968789465274 msec\nrounds: 19"
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
          "id": "83961e35de913b6b31134919554ee77db72fb698",
          "message": "Moved log around in evaluation",
          "timestamp": "2024-04-10T15:43:59+01:00",
          "tree_id": "d9787c68564affd5bcda8e7abd16129717fd281c",
          "url": "https://github.com/alcides/GeneticEngine/commit/83961e35de913b6b31134919554ee77db72fb698"
        },
        "date": 1712761529434,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 18600.92869769061,
            "unit": "iter/sec",
            "range": "stddev: 0.000016987209597160417",
            "extra": "mean: 53.76075658653293 usec\nrounds: 22542"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 19623.401669542254,
            "unit": "iter/sec",
            "range": "stddev: 0.000015968171220726525",
            "extra": "mean: 50.95956434261413 usec\nrounds: 25302"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 17644.5212062983,
            "unit": "iter/sec",
            "range": "stddev: 0.000017105355982740088",
            "extra": "mean: 56.67481640947248 usec\nrounds: 21085"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 126.99196708703809,
            "unit": "iter/sec",
            "range": "stddev: 0.0004544350603039604",
            "extra": "mean: 7.874513821134981 msec\nrounds: 123"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 129.48066701199826,
            "unit": "iter/sec",
            "range": "stddev: 0.00025508569704813015",
            "extra": "mean: 7.723160708674258 msec\nrounds: 127"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 128.8691586277074,
            "unit": "iter/sec",
            "range": "stddev: 0.0004163843441847335",
            "extra": "mean: 7.759808558143219 msec\nrounds: 129"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 129.23809887035802,
            "unit": "iter/sec",
            "range": "stddev: 0.00020333657764056738",
            "extra": "mean: 7.7376563779627014 msec\nrounds: 127"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 129.05877848738652,
            "unit": "iter/sec",
            "range": "stddev: 0.00026073494045474786",
            "extra": "mean: 7.7484074444245135 msec\nrounds: 126"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 58.41016400060937,
            "unit": "iter/sec",
            "range": "stddev: 0.0004063649555193684",
            "extra": "mean: 17.120308033882036 msec\nrounds: 59"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 2.763896665696309,
            "unit": "iter/sec",
            "range": "stddev: 0.001849636742696043",
            "extra": "mean: 361.80802719991334 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 12.058396777729833,
            "unit": "iter/sec",
            "range": "stddev: 0.0004999693808422266",
            "extra": "mean: 82.92976408330333 msec\nrounds: 12"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 58.654067104225156,
            "unit": "iter/sec",
            "range": "stddev: 0.0004333513731653523",
            "extra": "mean: 17.049116103458832 msec\nrounds: 58"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation]",
            "value": 1.6983273285553344,
            "unit": "iter/sec",
            "range": "stddev: 0.01722952419185021",
            "extra": "mean: 588.8146431999303 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation]",
            "value": 10.298402908884702,
            "unit": "iter/sec",
            "range": "stddev: 0.0002542867767269936",
            "extra": "mean: 97.10243509090849 msec\nrounds: 11"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.07766263578785805,
            "unit": "iter/sec",
            "range": "stddev: 0.10838287315587355",
            "extra": "mean: 12.876204752200056 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.3836707198655661,
            "unit": "iter/sec",
            "range": "stddev: 0.02878318302116018",
            "extra": "mean: 2.606401657000015 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation]",
            "value": 10.534467118185102,
            "unit": "iter/sec",
            "range": "stddev: 0.0006212244408185964",
            "extra": "mean: 94.92649118186075 msec\nrounds: 11"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation]",
            "value": 4.697666316144385,
            "unit": "iter/sec",
            "range": "stddev: 0.1722098973385574",
            "extra": "mean: 212.87165428572865 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation]",
            "value": 18.9650793339008,
            "unit": "iter/sec",
            "range": "stddev: 0.000272220222112082",
            "extra": "mean: 52.72849021055567 msec\nrounds: 19"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.08156602925602444,
            "unit": "iter/sec",
            "range": "stddev: 0.037390268490672264",
            "extra": "mean: 12.260005901000023 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.3744593226027126,
            "unit": "iter/sec",
            "range": "stddev: 0.012461381117527773",
            "extra": "mean: 2.6705170352000094 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation]",
            "value": 18.897646397502427,
            "unit": "iter/sec",
            "range": "stddev: 0.00015522952007633516",
            "extra": "mean: 52.916642578949045 msec\nrounds: 19"
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
          "id": "b45a7da7be61a69abe6964ba28c4457045952147",
          "message": "Generation Tracking improved",
          "timestamp": "2024-04-10T16:02:33+01:00",
          "tree_id": "6d47cec709276e3f50c31efc7ac60ce700c8a5c4",
          "url": "https://github.com/alcides/GeneticEngine/commit/b45a7da7be61a69abe6964ba28c4457045952147"
        },
        "date": 1712762630779,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 18448.686001632417,
            "unit": "iter/sec",
            "range": "stddev: 0.000018669665118951333",
            "extra": "mean: 54.204402411722754 usec\nrounds: 23625"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 19747.432754063324,
            "unit": "iter/sec",
            "range": "stddev: 0.000015871653289198414",
            "extra": "mean: 50.639493875184115 usec\nrounds: 25960"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 17540.532447509853,
            "unit": "iter/sec",
            "range": "stddev: 0.000017296879108056043",
            "extra": "mean: 57.01081212856598 usec\nrounds: 21323"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 127.73406377836257,
            "unit": "iter/sec",
            "range": "stddev: 0.0002908935808709514",
            "extra": "mean: 7.828765251962447 msec\nrounds: 127"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 123.4589206891659,
            "unit": "iter/sec",
            "range": "stddev: 0.0010582653020641247",
            "extra": "mean: 8.09986021599616 msec\nrounds: 125"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 128.13422765090687,
            "unit": "iter/sec",
            "range": "stddev: 0.000260226307732125",
            "extra": "mean: 7.80431597655884 msec\nrounds: 128"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 128.39607281426686,
            "unit": "iter/sec",
            "range": "stddev: 0.0001986845901821974",
            "extra": "mean: 7.7884002063409215 msec\nrounds: 126"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 127.66600418081228,
            "unit": "iter/sec",
            "range": "stddev: 0.00031066926609375794",
            "extra": "mean: 7.832938818886416 msec\nrounds: 127"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 58.25946855600728,
            "unit": "iter/sec",
            "range": "stddev: 0.00012012394722449093",
            "extra": "mean: 17.164591864387813 msec\nrounds: 59"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 2.7623351518214485,
            "unit": "iter/sec",
            "range": "stddev: 0.002296162265764606",
            "extra": "mean: 362.01255279997895 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 11.988944153529884,
            "unit": "iter/sec",
            "range": "stddev: 0.0009089352921219442",
            "extra": "mean: 83.41018084612327 msec\nrounds: 13"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 58.06996071436927,
            "unit": "iter/sec",
            "range": "stddev: 0.0001869601243208812",
            "extra": "mean: 17.220607482735087 msec\nrounds: 58"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation]",
            "value": 1.7397918885300079,
            "unit": "iter/sec",
            "range": "stddev: 0.008028991138928337",
            "extra": "mean: 574.7813899999983 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation]",
            "value": 10.290647042428676,
            "unit": "iter/sec",
            "range": "stddev: 0.0007410621095317683",
            "extra": "mean: 97.17561936358007 msec\nrounds: 11"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.07651043655559205,
            "unit": "iter/sec",
            "range": "stddev: 0.031388836318415284",
            "extra": "mean: 13.070112327400011 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.37495865648672255,
            "unit": "iter/sec",
            "range": "stddev: 0.03497104084652125",
            "extra": "mean: 2.666960697400009 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation]",
            "value": 10.333188486762092,
            "unit": "iter/sec",
            "range": "stddev: 0.0004233719391566608",
            "extra": "mean: 96.77555009096234 msec\nrounds: 11"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation]",
            "value": 4.690487124161742,
            "unit": "iter/sec",
            "range": "stddev: 0.17216504608018807",
            "extra": "mean: 213.1974725714047 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation]",
            "value": 18.249635363647798,
            "unit": "iter/sec",
            "range": "stddev: 0.0004455451353312162",
            "extra": "mean: 54.795615368400256 msec\nrounds: 19"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.08299907443930732,
            "unit": "iter/sec",
            "range": "stddev: 0.05579589146058958",
            "extra": "mean: 12.048327126000004 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.38383085189224386,
            "unit": "iter/sec",
            "range": "stddev: 0.01003300456384181",
            "extra": "mean: 2.6053142811999352 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation]",
            "value": 18.686121977621248,
            "unit": "iter/sec",
            "range": "stddev: 0.0007722084545246641",
            "extra": "mean: 53.515651947344324 msec\nrounds: 19"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bdf23f491ed7f37c96bf0fa80092f71fbac1acdb",
          "message": "Merge pull request #173 from alcides/dependabot/pip/scikit-learn-1.4.2\n\nBump scikit-learn from 1.2.2 to 1.4.2",
          "timestamp": "2024-04-22T21:18:16+01:00",
          "tree_id": "ee49929a4b76d8c21a1769358018f5f45c4f2392",
          "url": "https://github.com/alcides/GeneticEngine/commit/bdf23f491ed7f37c96bf0fa80092f71fbac1acdb"
        },
        "date": 1713817997818,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 16342.684669156813,
            "unit": "iter/sec",
            "range": "stddev: 0.00001894673938283585",
            "extra": "mean: 61.18945694933941 usec\nrounds: 20267"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 16095.35992644522,
            "unit": "iter/sec",
            "range": "stddev: 0.0000220585788294264",
            "extra": "mean: 62.12970723052711 usec\nrounds: 22335"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 15391.15504379464,
            "unit": "iter/sec",
            "range": "stddev: 0.00001979076437843037",
            "extra": "mean: 64.97238167990368 usec\nrounds: 18657"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 113.11835672003875,
            "unit": "iter/sec",
            "range": "stddev: 0.0002522433794719323",
            "extra": "mean: 8.840298153154231 msec\nrounds: 111"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 111.82172293740699,
            "unit": "iter/sec",
            "range": "stddev: 0.0006256468717380018",
            "extra": "mean: 8.942806225224746 msec\nrounds: 111"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 112.97016074163336,
            "unit": "iter/sec",
            "range": "stddev: 0.0002479057081892843",
            "extra": "mean: 8.851894990988233 msec\nrounds: 111"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 110.70128232833025,
            "unit": "iter/sec",
            "range": "stddev: 0.0007219643883553701",
            "extra": "mean: 9.033319027272766 msec\nrounds: 110"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 113.7205435990787,
            "unit": "iter/sec",
            "range": "stddev: 0.00021383953670612015",
            "extra": "mean: 8.793485929204628 msec\nrounds: 113"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 46.133758730030166,
            "unit": "iter/sec",
            "range": "stddev: 0.0005751547698985718",
            "extra": "mean: 21.676100702132103 msec\nrounds: 47"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 2.1193663002358094,
            "unit": "iter/sec",
            "range": "stddev: 0.0045240118922002595",
            "extra": "mean: 471.83915299999626 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 9.633598721542926,
            "unit": "iter/sec",
            "range": "stddev: 0.001525283372527492",
            "extra": "mean: 103.80336869998246 msec\nrounds: 10"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 46.827051776552416,
            "unit": "iter/sec",
            "range": "stddev: 0.00006617213083852097",
            "extra": "mean: 21.355177446826307 msec\nrounds: 47"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation]",
            "value": 1.5472597276399758,
            "unit": "iter/sec",
            "range": "stddev: 0.007454872933134223",
            "extra": "mean: 646.30390239995 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation]",
            "value": 8.879391854429269,
            "unit": "iter/sec",
            "range": "stddev: 0.00039672373786459015",
            "extra": "mean: 112.62032540000746 msec\nrounds: 10"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.07141383715531659,
            "unit": "iter/sec",
            "range": "stddev: 0.11706112430416997",
            "extra": "mean: 14.00288851339999 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.3539114812056443,
            "unit": "iter/sec",
            "range": "stddev: 0.023177751929903345",
            "extra": "mean: 2.8255652983999653 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation]",
            "value": 9.03910429960878,
            "unit": "iter/sec",
            "range": "stddev: 0.00017282446291368904",
            "extra": "mean: 110.63043049998669 msec\nrounds: 10"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation]",
            "value": 3.8156373569413593,
            "unit": "iter/sec",
            "range": "stddev: 0.22340362189006077",
            "extra": "mean: 262.07941333334855 msec\nrounds: 6"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation]",
            "value": 15.078812610818217,
            "unit": "iter/sec",
            "range": "stddev: 0.0003856113545809022",
            "extra": "mean: 66.3182192000022 msec\nrounds: 15"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.07749761164655886,
            "unit": "iter/sec",
            "range": "stddev: 0.03567598293361891",
            "extra": "mean: 12.903623463400027 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.3495199114591282,
            "unit": "iter/sec",
            "range": "stddev: 0.009928027857403328",
            "extra": "mean: 2.8610673303999645 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation]",
            "value": 15.130178819780454,
            "unit": "iter/sec",
            "range": "stddev: 0.0004734632804892563",
            "extra": "mean: 66.09307212500681 msec\nrounds: 16"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d56972ed14fa6aab777e7fe21a78c54966468c08",
          "message": "Merge pull request #176 from alcides/dependabot/pip/numpy-1.26.4\n\nBump numpy from 1.26.1 to 1.26.4",
          "timestamp": "2024-04-22T21:18:30+01:00",
          "tree_id": "fce652b8a94ed85ec315e5cffe2f4bf83da1e855",
          "url": "https://github.com/alcides/GeneticEngine/commit/d56972ed14fa6aab777e7fe21a78c54966468c08"
        },
        "date": 1713818015314,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 16388.92821768078,
            "unit": "iter/sec",
            "range": "stddev: 0.000018982935267465432",
            "extra": "mean: 61.01680272912388 usec\nrounds: 21032"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 16701.45382638052,
            "unit": "iter/sec",
            "range": "stddev: 0.000019856070115627877",
            "extra": "mean: 59.87502707222204 usec\nrounds: 22385"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 15230.166398270707,
            "unit": "iter/sec",
            "range": "stddev: 0.000021440674880987247",
            "extra": "mean: 65.65916444048464 usec\nrounds: 19016"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 110.51907194114726,
            "unit": "iter/sec",
            "range": "stddev: 0.0008023334025135765",
            "extra": "mean: 9.04821206363832 msec\nrounds: 110"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 112.0387797588593,
            "unit": "iter/sec",
            "range": "stddev: 0.00023098259397374719",
            "extra": "mean: 8.925480999992116 msec\nrounds: 109"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 112.13335844988306,
            "unit": "iter/sec",
            "range": "stddev: 0.00021171941172325417",
            "extra": "mean: 8.917952818178904 msec\nrounds: 110"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 110.55701720866294,
            "unit": "iter/sec",
            "range": "stddev: 0.0004006015999676742",
            "extra": "mean: 9.045106545454473 msec\nrounds: 110"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 113.05469445574752,
            "unit": "iter/sec",
            "range": "stddev: 0.0002305033287796044",
            "extra": "mean: 8.84527621620724 msec\nrounds: 111"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 45.239600356335295,
            "unit": "iter/sec",
            "range": "stddev: 0.00027858908493839506",
            "extra": "mean: 22.10452771738425 msec\nrounds: 46"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 2.187071238079476,
            "unit": "iter/sec",
            "range": "stddev: 0.002400683142565231",
            "extra": "mean: 457.2324772000229 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 9.404174134473797,
            "unit": "iter/sec",
            "range": "stddev: 0.0005299516241794793",
            "extra": "mean: 106.33575960000599 msec\nrounds: 10"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 45.709075856282375,
            "unit": "iter/sec",
            "range": "stddev: 0.00006464957917205877",
            "extra": "mean: 21.87749328260719 msec\nrounds: 46"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation]",
            "value": 1.5464831671104957,
            "unit": "iter/sec",
            "range": "stddev: 0.007294885070506355",
            "extra": "mean: 646.6284414000029 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation]",
            "value": 8.912522537830089,
            "unit": "iter/sec",
            "range": "stddev: 0.0010954053064132305",
            "extra": "mean: 112.20167980001179 msec\nrounds: 10"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.07331257627264659,
            "unit": "iter/sec",
            "range": "stddev: 0.06875132642341071",
            "extra": "mean: 13.64022451320002 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.3666837192465831,
            "unit": "iter/sec",
            "range": "stddev: 0.006769115180116472",
            "extra": "mean: 2.727145895800004 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation]",
            "value": 9.00762120237619,
            "unit": "iter/sec",
            "range": "stddev: 0.0001595305147427196",
            "extra": "mean: 111.017101799996 msec\nrounds: 10"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation]",
            "value": 3.815459513832991,
            "unit": "iter/sec",
            "range": "stddev: 0.22549798420324993",
            "extra": "mean: 262.09162916668066 msec\nrounds: 6"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation]",
            "value": 14.832456193956034,
            "unit": "iter/sec",
            "range": "stddev: 0.0002575299870136718",
            "extra": "mean: 67.41971706665026 msec\nrounds: 15"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.07751236592401985,
            "unit": "iter/sec",
            "range": "stddev: 0.032471747398843884",
            "extra": "mean: 12.901167292199966 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.34514336575100923,
            "unit": "iter/sec",
            "range": "stddev: 0.02049336821649719",
            "extra": "mean: 2.897346723800024 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation]",
            "value": 14.74200222398862,
            "unit": "iter/sec",
            "range": "stddev: 0.0003425404034758122",
            "extra": "mean: 67.83339093334082 msec\nrounds: 15"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a86b2c5c2fa9c3df10b3bc324156fe01f1cda2e2",
          "message": "Merge pull request #167 from alcides/dependabot/pip/sphinx-7.2.6\n\nBump sphinx from 6.2.1 to 7.2.6",
          "timestamp": "2024-04-22T21:17:47+01:00",
          "tree_id": "bfff22d8b990263bbb837677ec1807fa275d0f7d",
          "url": "https://github.com/alcides/GeneticEngine/commit/a86b2c5c2fa9c3df10b3bc324156fe01f1cda2e2"
        },
        "date": 1713818330475,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 19108.125765509278,
            "unit": "iter/sec",
            "range": "stddev: 0.000016025420120309563",
            "extra": "mean: 52.33375644852773 usec\nrounds: 23765"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 19874.082743218685,
            "unit": "iter/sec",
            "range": "stddev: 0.000015289578672116225",
            "extra": "mean: 50.316787593189126 usec\nrounds: 26581"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 17539.37794185411,
            "unit": "iter/sec",
            "range": "stddev: 0.000017704617913900523",
            "extra": "mean: 57.01456478759753 usec\nrounds: 22010"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 131.20497259945893,
            "unit": "iter/sec",
            "range": "stddev: 0.00018343736593142814",
            "extra": "mean: 7.621662351569469 msec\nrounds: 128"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 131.24041128624327,
            "unit": "iter/sec",
            "range": "stddev: 0.0001918647367600136",
            "extra": "mean: 7.619604283462198 msec\nrounds: 127"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 130.5723755267751,
            "unit": "iter/sec",
            "range": "stddev: 0.0002938548924398806",
            "extra": "mean: 7.658587782949087 msec\nrounds: 129"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 132.05672872067098,
            "unit": "iter/sec",
            "range": "stddev: 0.0002497290789377835",
            "extra": "mean: 7.5725031937995375 msec\nrounds: 129"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 131.9360534883295,
            "unit": "iter/sec",
            "range": "stddev: 0.0003130866306156419",
            "extra": "mean: 7.579429379312574 msec\nrounds: 116"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 57.18887113948747,
            "unit": "iter/sec",
            "range": "stddev: 0.00013641326020281068",
            "extra": "mean: 17.485919551741688 msec\nrounds: 58"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 2.7049767342412605,
            "unit": "iter/sec",
            "range": "stddev: 0.004465216082146847",
            "extra": "mean: 369.68894679994264 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 11.655594547951392,
            "unit": "iter/sec",
            "range": "stddev: 0.0014229909576878841",
            "extra": "mean: 85.79570916661321 msec\nrounds: 12"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 57.729031471982566,
            "unit": "iter/sec",
            "range": "stddev: 0.000056071731150938105",
            "extra": "mean: 17.32230689657987 msec\nrounds: 58"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation]",
            "value": 1.8349738379284457,
            "unit": "iter/sec",
            "range": "stddev: 0.007204556351961438",
            "extra": "mean: 544.9668977999863 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation]",
            "value": 10.436326571223336,
            "unit": "iter/sec",
            "range": "stddev: 0.00028482952571989254",
            "extra": "mean: 95.81915563636687 msec\nrounds: 11"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.08076811206005081,
            "unit": "iter/sec",
            "range": "stddev: 0.07064953862776928",
            "extra": "mean: 12.381123868000078 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.3969742767033781,
            "unit": "iter/sec",
            "range": "stddev: 0.024057294320652553",
            "extra": "mean: 2.5190549078 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation]",
            "value": 10.482372060777868,
            "unit": "iter/sec",
            "range": "stddev: 0.0001597854883987397",
            "extra": "mean: 95.39825472725997 msec\nrounds: 11"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation]",
            "value": 4.814892370756968,
            "unit": "iter/sec",
            "range": "stddev: 0.17161819293684266",
            "extra": "mean: 207.68896228573144 msec\nrounds: 7"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation]",
            "value": 18.78858622459863,
            "unit": "iter/sec",
            "range": "stddev: 0.00015680919795765612",
            "extra": "mean: 53.22380236841701 msec\nrounds: 19"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.08448544530862927,
            "unit": "iter/sec",
            "range": "stddev: 0.04383238837548658",
            "extra": "mean: 11.836358278599983 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.38647777974230163,
            "unit": "iter/sec",
            "range": "stddev: 0.013389528587907188",
            "extra": "mean: 2.5874708777999786 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation]",
            "value": 18.640224450031376,
            "unit": "iter/sec",
            "range": "stddev: 0.0006497770856493256",
            "extra": "mean: 53.64742268424332 msec\nrounds: 19"
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
          "id": "a10b576976c0f0e7654b8a63bdd2d07a04f132ec",
          "message": "Added Tests for Lists",
          "timestamp": "2024-04-22T20:18:34Z",
          "url": "https://github.com/alcides/GeneticEngine/pull/177/commits/a10b576976c0f0e7654b8a63bdd2d07a04f132ec"
        },
        "date": 1713818583591,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 16394.91377786622,
            "unit": "iter/sec",
            "range": "stddev: 0.00001876380612958675",
            "extra": "mean: 60.99452632376997 usec\nrounds: 21179"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 17057.254287361495,
            "unit": "iter/sec",
            "range": "stddev: 0.000018043590803994167",
            "extra": "mean: 58.62608267152036 usec\nrounds: 22789"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 15000.448910719513,
            "unit": "iter/sec",
            "range": "stddev: 0.000022710269881290202",
            "extra": "mean: 66.66467156762137 usec\nrounds: 19453"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 113.25681598350471,
            "unit": "iter/sec",
            "range": "stddev: 0.0002157474550055951",
            "extra": "mean: 8.82949066964451 msec\nrounds: 112"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 113.41590601191562,
            "unit": "iter/sec",
            "range": "stddev: 0.0002072563664318989",
            "extra": "mean: 8.817105423422168 msec\nrounds: 111"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 112.8954233919604,
            "unit": "iter/sec",
            "range": "stddev: 0.00021971357668937525",
            "extra": "mean: 8.857754990900835 msec\nrounds: 110"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 113.47722414378958,
            "unit": "iter/sec",
            "range": "stddev: 0.00022466667784817691",
            "extra": "mean: 8.81234104504422 msec\nrounds: 111"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 113.84037237533057,
            "unit": "iter/sec",
            "range": "stddev: 0.000307977033886113",
            "extra": "mean: 8.784229874995576 msec\nrounds: 112"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 46.24726271801022,
            "unit": "iter/sec",
            "range": "stddev: 0.00013139207935668342",
            "extra": "mean: 21.622901361696524 msec\nrounds: 47"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 2.2250985329257738,
            "unit": "iter/sec",
            "range": "stddev: 0.002824465112271617",
            "extra": "mean: 449.4183000000021 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 9.758124375769079,
            "unit": "iter/sec",
            "range": "stddev: 0.0016480477176025845",
            "extra": "mean: 102.47871020000048 msec\nrounds: 10"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 46.75273618597872,
            "unit": "iter/sec",
            "range": "stddev: 0.00005766465774434333",
            "extra": "mean: 21.389122468085684 msec\nrounds: 47"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation]",
            "value": 1.5671151418496958,
            "unit": "iter/sec",
            "range": "stddev: 0.0065789878035060955",
            "extra": "mean: 638.1152049999855 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation]",
            "value": 8.727596390979034,
            "unit": "iter/sec",
            "range": "stddev: 0.0008939304749695203",
            "extra": "mean: 114.57908399999042 msec\nrounds: 10"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.07371652332736228,
            "unit": "iter/sec",
            "range": "stddev: 0.1022197031292887",
            "extra": "mean: 13.565479689799986 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.36751354409846904,
            "unit": "iter/sec",
            "range": "stddev: 0.024319048651555784",
            "extra": "mean: 2.7209881542000174 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation]",
            "value": 8.778541803424956,
            "unit": "iter/sec",
            "range": "stddev: 0.0005110579089394413",
            "extra": "mean: 113.9141354444367 msec\nrounds: 9"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation]",
            "value": 3.82332731012089,
            "unit": "iter/sec",
            "range": "stddev: 0.22088659813675532",
            "extra": "mean: 261.55228649999646 msec\nrounds: 6"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation]",
            "value": 15.081621418401937,
            "unit": "iter/sec",
            "range": "stddev: 0.00035053285416700446",
            "extra": "mean: 66.30586806666845 msec\nrounds: 15"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.07824472224461611,
            "unit": "iter/sec",
            "range": "stddev: 0.03394628680199592",
            "extra": "mean: 12.780414720800014 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.35270492895800437,
            "unit": "iter/sec",
            "range": "stddev: 0.012949364606072699",
            "extra": "mean: 2.8352311462000217 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation]",
            "value": 15.033567686577896,
            "unit": "iter/sec",
            "range": "stddev: 0.00022491739350648064",
            "extra": "mean: 66.51781006665564 msec\nrounds: 15"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d837cfe2e6593d7d79428cd0a6ed7d6c33bcff11",
          "message": "Merge pull request #174 from alcides/dependabot/pip/pandas-2.2.2\n\nBump pandas from 1.5.3 to 2.2.2",
          "timestamp": "2024-04-22T21:50:58+01:00",
          "tree_id": "2aafec10aab875140bf5435afb79c91332161ccf",
          "url": "https://github.com/alcides/GeneticEngine/commit/d837cfe2e6593d7d79428cd0a6ed7d6c33bcff11"
        },
        "date": 1713819462407,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 16411.22119030987,
            "unit": "iter/sec",
            "range": "stddev: 0.000019229515371468925",
            "extra": "mean: 60.93391761671324 usec\nrounds: 21315"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 17095.614616670384,
            "unit": "iter/sec",
            "range": "stddev: 0.000018431292460795636",
            "extra": "mean: 58.49453338898231 usec\nrounds: 22747"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 15430.325017374491,
            "unit": "iter/sec",
            "range": "stddev: 0.000020879327159996367",
            "extra": "mean: 64.80744889521144 usec\nrounds: 20321"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 112.93549094815447,
            "unit": "iter/sec",
            "range": "stddev: 0.0003812202608268736",
            "extra": "mean: 8.854612412842586 msec\nrounds: 109"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 113.8766442801311,
            "unit": "iter/sec",
            "range": "stddev: 0.0002255930095871856",
            "extra": "mean: 8.781431928570425 msec\nrounds: 112"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 113.58423640227004,
            "unit": "iter/sec",
            "range": "stddev: 0.00039023586307947134",
            "extra": "mean: 8.804038585586815 msec\nrounds: 111"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 112.59054325408786,
            "unit": "iter/sec",
            "range": "stddev: 0.00044703512553972497",
            "extra": "mean: 8.88174060714191 msec\nrounds: 112"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 113.5710517545592,
            "unit": "iter/sec",
            "range": "stddev: 0.00032650000819876016",
            "extra": "mean: 8.80506066071415 msec\nrounds: 112"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 45.5666722474633,
            "unit": "iter/sec",
            "range": "stddev: 0.0006244538074397515",
            "extra": "mean: 21.94586417391211 msec\nrounds: 46"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 2.2382252081666847,
            "unit": "iter/sec",
            "range": "stddev: 0.0015753768825024566",
            "extra": "mean: 446.7825651999931 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 9.464962400110627,
            "unit": "iter/sec",
            "range": "stddev: 0.0017063767685956007",
            "extra": "mean: 105.65282329999661 msec\nrounds: 10"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 45.62042431262478,
            "unit": "iter/sec",
            "range": "stddev: 0.0007231275731955536",
            "extra": "mean: 21.92000655555641 msec\nrounds: 45"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation]",
            "value": 1.5219616756413477,
            "unit": "iter/sec",
            "range": "stddev: 0.005209995039714074",
            "extra": "mean: 657.0467679999922 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation]",
            "value": 8.893237429028382,
            "unit": "iter/sec",
            "range": "stddev: 0.001827650234678277",
            "extra": "mean: 112.44499070000131 msec\nrounds: 10"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.07202047373632602,
            "unit": "iter/sec",
            "range": "stddev: 0.18373805312388736",
            "extra": "mean: 13.8849406026 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.3468370281018081,
            "unit": "iter/sec",
            "range": "stddev: 0.04173806700556732",
            "extra": "mean: 2.8831985024000004 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation]",
            "value": 8.990927977449159,
            "unit": "iter/sec",
            "range": "stddev: 0.0010312238308498175",
            "extra": "mean: 111.22322439999266 msec\nrounds: 10"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation]",
            "value": 3.769337267940855,
            "unit": "iter/sec",
            "range": "stddev: 0.22697526837971407",
            "extra": "mean: 265.29862650000763 msec\nrounds: 6"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation]",
            "value": 14.773412825114766,
            "unit": "iter/sec",
            "range": "stddev: 0.0009125207499971356",
            "extra": "mean: 67.68916646666791 msec\nrounds: 15"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.07696607314123993,
            "unit": "iter/sec",
            "range": "stddev: 0.05244513783571056",
            "extra": "mean: 12.992737698400003 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.3448737003872422,
            "unit": "iter/sec",
            "range": "stddev: 0.0139279284700161",
            "extra": "mean: 2.899612231599997 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation]",
            "value": 14.766046420891687,
            "unit": "iter/sec",
            "range": "stddev: 0.0006258512598403363",
            "extra": "mean: 67.72293486665149 msec\nrounds: 15"
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
          "id": "571c4207800e27024f73f93059263b1d2b74bdfe",
          "message": "Added Tests for Lists",
          "timestamp": "2024-04-22T20:18:34Z",
          "url": "https://github.com/alcides/GeneticEngine/pull/177/commits/571c4207800e27024f73f93059263b1d2b74bdfe"
        },
        "date": 1713819916089,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 16314.215954815454,
            "unit": "iter/sec",
            "range": "stddev: 0.00001954482988307917",
            "extra": "mean: 61.296234080120215 usec\nrounds: 21027"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 17045.581128007925,
            "unit": "iter/sec",
            "range": "stddev: 0.000018608264697499622",
            "extra": "mean: 58.666231000882725 usec\nrounds: 22593"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 15515.493522997127,
            "unit": "iter/sec",
            "range": "stddev: 0.000019497006153453645",
            "extra": "mean: 64.45170426050554 usec\nrounds: 19480"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 113.791412474004,
            "unit": "iter/sec",
            "range": "stddev: 0.0002408156099806649",
            "extra": "mean: 8.788009378374252 msec\nrounds: 111"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 111.93306754415215,
            "unit": "iter/sec",
            "range": "stddev: 0.0006231767846054919",
            "extra": "mean: 8.933910433621849 msec\nrounds: 113"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 114.1194502969945,
            "unit": "iter/sec",
            "range": "stddev: 0.0002129520422783125",
            "extra": "mean: 8.7627481327461 msec\nrounds: 113"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 113.96607966913233,
            "unit": "iter/sec",
            "range": "stddev: 0.00031880350070377536",
            "extra": "mean: 8.774540660723014 msec\nrounds: 112"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 113.39673977082766,
            "unit": "iter/sec",
            "range": "stddev: 0.00021349975305941726",
            "extra": "mean: 8.818595684681748 msec\nrounds: 111"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 46.77469662356913,
            "unit": "iter/sec",
            "range": "stddev: 0.00011542430529744258",
            "extra": "mean: 21.379080404256726 msec\nrounds: 47"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 2.2347838858298545,
            "unit": "iter/sec",
            "range": "stddev: 0.0008849850119391515",
            "extra": "mean: 447.4705614000186 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 9.729610703455203,
            "unit": "iter/sec",
            "range": "stddev: 0.0005189183472765804",
            "extra": "mean: 102.77903510002488 msec\nrounds: 10"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 47.14279654329465,
            "unit": "iter/sec",
            "range": "stddev: 0.0008540259667744441",
            "extra": "mean: 21.212148479177035 msec\nrounds: 48"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation]",
            "value": 1.5546970000489517,
            "unit": "iter/sec",
            "range": "stddev: 0.012697868933637663",
            "extra": "mean: 643.2121499999766 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation]",
            "value": 9.009449286999239,
            "unit": "iter/sec",
            "range": "stddev: 0.0003751724623695229",
            "extra": "mean: 110.99457559997745 msec\nrounds: 10"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.07216871020789783,
            "unit": "iter/sec",
            "range": "stddev: 0.10858892203238484",
            "extra": "mean: 13.856420561200002 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.3486742520038423,
            "unit": "iter/sec",
            "range": "stddev: 0.01512479593454883",
            "extra": "mean: 2.8680064394000055 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation]",
            "value": 8.953994569307445,
            "unit": "iter/sec",
            "range": "stddev: 0.00020162698101304516",
            "extra": "mean: 111.68199760002153 msec\nrounds: 10"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation]",
            "value": 3.790760529298362,
            "unit": "iter/sec",
            "range": "stddev: 0.22308111874543116",
            "extra": "mean: 263.7993068333155 msec\nrounds: 6"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation]",
            "value": 14.824470369386328,
            "unit": "iter/sec",
            "range": "stddev: 0.001035979345747026",
            "extra": "mean: 67.45603553332178 msec\nrounds: 15"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.07739886268905913,
            "unit": "iter/sec",
            "range": "stddev: 0.035827219103657715",
            "extra": "mean: 12.920086487799995 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.34891381252655174,
            "unit": "iter/sec",
            "range": "stddev: 0.01423762648605308",
            "extra": "mean: 2.8660372966000067 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation]",
            "value": 15.016732074606407,
            "unit": "iter/sec",
            "range": "stddev: 0.0009101359305586483",
            "extra": "mean: 66.59238475000961 msec\nrounds: 16"
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
          "id": "571c4207800e27024f73f93059263b1d2b74bdfe",
          "message": "Added Tests for Lists",
          "timestamp": "2024-04-22T20:18:34Z",
          "url": "https://github.com/alcides/GeneticEngine/pull/177/commits/571c4207800e27024f73f93059263b1d2b74bdfe"
        },
        "date": 1713819920208,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 15719.927293629622,
            "unit": "iter/sec",
            "range": "stddev: 0.000019626230244941204",
            "extra": "mean: 63.613525770264985 usec\nrounds: 21148"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 15758.196297893457,
            "unit": "iter/sec",
            "range": "stddev: 0.000019176271924377805",
            "extra": "mean: 63.45903941643874 usec\nrounds: 20778"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 15030.38710436575,
            "unit": "iter/sec",
            "range": "stddev: 0.00002033451434765981",
            "extra": "mean: 66.53188590928163 usec\nrounds: 18126"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 110.48993258081529,
            "unit": "iter/sec",
            "range": "stddev: 0.0005940111584815662",
            "extra": "mean: 9.050598336355879 msec\nrounds: 110"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 112.80778109874299,
            "unit": "iter/sec",
            "range": "stddev: 0.0002387941510967002",
            "extra": "mean: 8.864636732147753 msec\nrounds: 112"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 104.76612069651065,
            "unit": "iter/sec",
            "range": "stddev: 0.0002411046610416386",
            "extra": "mean: 9.545070423069564 msec\nrounds: 104"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 104.54864033450092,
            "unit": "iter/sec",
            "range": "stddev: 0.00022901273420576957",
            "extra": "mean: 9.564925921566493 msec\nrounds: 102"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 104.35020324741716,
            "unit": "iter/sec",
            "range": "stddev: 0.0002310200786552504",
            "extra": "mean: 9.583115019229748 msec\nrounds: 104"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 45.28169315069073,
            "unit": "iter/sec",
            "range": "stddev: 0.0005353745970915727",
            "extra": "mean: 22.083979869572214 msec\nrounds: 46"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 2.1996532606497934,
            "unit": "iter/sec",
            "range": "stddev: 0.0010922364546270583",
            "extra": "mean: 454.6171061999985 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 9.007520731251887,
            "unit": "iter/sec",
            "range": "stddev: 0.0005613719535100501",
            "extra": "mean: 111.01834010000857 msec\nrounds: 10"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 43.651874554353206,
            "unit": "iter/sec",
            "range": "stddev: 0.00015476460782995986",
            "extra": "mean: 22.908523636364077 msec\nrounds: 44"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation]",
            "value": 1.39873113277245,
            "unit": "iter/sec",
            "range": "stddev: 0.010898529794046392",
            "extra": "mean: 714.9336827999832 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation]",
            "value": 8.924909625807313,
            "unit": "iter/sec",
            "range": "stddev: 0.00024217131419701195",
            "extra": "mean: 112.04595250000011 msec\nrounds: 10"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.07388824267533091,
            "unit": "iter/sec",
            "range": "stddev: 0.08937365724108547",
            "extra": "mean: 13.533952951000014 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.3639840204719517,
            "unit": "iter/sec",
            "range": "stddev: 0.014640486098438044",
            "extra": "mean: 2.747373356400021 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation]",
            "value": 9.12788839066484,
            "unit": "iter/sec",
            "range": "stddev: 0.0001536240624272978",
            "extra": "mean: 109.55436320000445 msec\nrounds: 10"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation]",
            "value": 3.821775402323463,
            "unit": "iter/sec",
            "range": "stddev: 0.2225204723443833",
            "extra": "mean: 261.65849500000604 msec\nrounds: 6"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation]",
            "value": 14.988834592277373,
            "unit": "iter/sec",
            "range": "stddev: 0.00019431594500096485",
            "extra": "mean: 66.71632766667699 msec\nrounds: 15"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.0778760223414283,
            "unit": "iter/sec",
            "range": "stddev: 0.0515668290043382",
            "extra": "mean: 12.840922917399984 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.3516411567642427,
            "unit": "iter/sec",
            "range": "stddev: 0.011006862922270402",
            "extra": "mean: 2.8438081855999826 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation]",
            "value": 15.07048493590329,
            "unit": "iter/sec",
            "range": "stddev: 0.00091216136500289",
            "extra": "mean: 66.35486543751767 msec\nrounds: 16"
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
          "distinct": false,
          "id": "a10b576976c0f0e7654b8a63bdd2d07a04f132ec",
          "message": "Added tests for list",
          "timestamp": "2024-04-22T21:26:57+01:00",
          "tree_id": "08ba714d7cf65e104a5f1351e411229d2df35fc6",
          "url": "https://github.com/alcides/GeneticEngine/commit/a10b576976c0f0e7654b8a63bdd2d07a04f132ec"
        },
        "date": 1713819923293,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 16589.523549405978,
            "unit": "iter/sec",
            "range": "stddev: 0.0000187153264923754",
            "extra": "mean: 60.27900662860248 usec\nrounds: 21573"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 16415.688848586913,
            "unit": "iter/sec",
            "range": "stddev: 0.000020299899238154564",
            "extra": "mean: 60.9173339738394 usec\nrounds: 20301"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 15169.667918719646,
            "unit": "iter/sec",
            "range": "stddev: 0.000020065908306571065",
            "extra": "mean: 65.92102116922295 usec\nrounds: 17667"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 111.26961163821795,
            "unit": "iter/sec",
            "range": "stddev: 0.00034364623264121345",
            "extra": "mean: 8.987179745458267 msec\nrounds: 110"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 103.92271516677124,
            "unit": "iter/sec",
            "range": "stddev: 0.00023827275006486367",
            "extra": "mean: 9.622535346533603 msec\nrounds: 101"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 103.95702913791808,
            "unit": "iter/sec",
            "range": "stddev: 0.0002347469400696011",
            "extra": "mean: 9.619359155342122 msec\nrounds: 103"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 111.89261124049241,
            "unit": "iter/sec",
            "range": "stddev: 0.00035074453923053913",
            "extra": "mean: 8.937140611105102 msec\nrounds: 108"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 112.59013319953304,
            "unit": "iter/sec",
            "range": "stddev: 0.00020992794989798408",
            "extra": "mean: 8.881772954542942 msec\nrounds: 110"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 46.014974238935054,
            "unit": "iter/sec",
            "range": "stddev: 0.00018998485688899615",
            "extra": "mean: 21.73205606521586 msec\nrounds: 46"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 2.17962783243605,
            "unit": "iter/sec",
            "range": "stddev: 0.011228632924566198",
            "extra": "mean: 458.79392120000375 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 9.459355466628848,
            "unit": "iter/sec",
            "range": "stddev: 0.0017365618137172355",
            "extra": "mean: 105.71544790000189 msec\nrounds: 10"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 46.34264290369263,
            "unit": "iter/sec",
            "range": "stddev: 0.00012305386209583678",
            "extra": "mean: 21.57839815217615 msec\nrounds: 46"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation]",
            "value": 1.4099581552280567,
            "unit": "iter/sec",
            "range": "stddev: 0.006956088240437094",
            "extra": "mean: 709.2409063999867 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation]",
            "value": 8.598705261420664,
            "unit": "iter/sec",
            "range": "stddev: 0.0001698715562215594",
            "extra": "mean: 116.29657833332709 msec\nrounds: 9"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.07378089071581685,
            "unit": "iter/sec",
            "range": "stddev: 0.11785756596706275",
            "extra": "mean: 13.553644992600017 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.36155217276049534,
            "unit": "iter/sec",
            "range": "stddev: 0.016493196845581565",
            "extra": "mean: 2.7658525527999926 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation]",
            "value": 8.69254150384219,
            "unit": "iter/sec",
            "range": "stddev: 0.0028169107819093313",
            "extra": "mean: 115.0411533333479 msec\nrounds: 9"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation]",
            "value": 3.7889883371393633,
            "unit": "iter/sec",
            "range": "stddev: 0.22298665141656052",
            "extra": "mean: 263.9226915000184 msec\nrounds: 6"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation]",
            "value": 14.717113703834988,
            "unit": "iter/sec",
            "range": "stddev: 0.0027988007321611353",
            "extra": "mean: 67.94810586667002 msec\nrounds: 15"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.07606425108070064,
            "unit": "iter/sec",
            "range": "stddev: 0.02229322861761165",
            "extra": "mean: 13.146780330999992 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.3430732982863764,
            "unit": "iter/sec",
            "range": "stddev: 0.007678355008072642",
            "extra": "mean: 2.914829003 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation]",
            "value": 14.945787905765807,
            "unit": "iter/sec",
            "range": "stddev: 0.0009457650322198788",
            "extra": "mean: 66.90848326666128 msec\nrounds: 15"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6073d43c35d8f966e7c7d0ecb47fafc55338e1e7",
          "message": "Merge pull request #175 from alcides/dependabot/pip/sphinx-autoapi-3.0.0\n\nBump sphinx-autoapi from 2.1.1 to 3.0.0",
          "timestamp": "2024-04-22T21:50:50+01:00",
          "tree_id": "7c912ddc69b564cb28cd1448de0025c30e9e8b6e",
          "url": "https://github.com/alcides/GeneticEngine/commit/6073d43c35d8f966e7c7d0ecb47fafc55338e1e7"
        },
        "date": 1713819967869,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 16809.219541620292,
            "unit": "iter/sec",
            "range": "stddev: 0.000018610964033730614",
            "extra": "mean: 59.49116183080128 usec\nrounds: 22542"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 16957.227802787216,
            "unit": "iter/sec",
            "range": "stddev: 0.00001931401289857761",
            "extra": "mean: 58.971903404849726 usec\nrounds: 22527"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 15686.592716729036,
            "unit": "iter/sec",
            "range": "stddev: 0.000019655676113175382",
            "extra": "mean: 63.74870681340159 usec\nrounds: 19711"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 114.85832266552384,
            "unit": "iter/sec",
            "range": "stddev: 0.00021026889176143745",
            "extra": "mean: 8.706378230092005 msec\nrounds: 113"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 114.46370055124564,
            "unit": "iter/sec",
            "range": "stddev: 0.00021542391986135274",
            "extra": "mean: 8.736394116074361 msec\nrounds: 112"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 114.64017363097834,
            "unit": "iter/sec",
            "range": "stddev: 0.00021069099379617082",
            "extra": "mean: 8.722945616071343 msec\nrounds: 112"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 113.71559572638662,
            "unit": "iter/sec",
            "range": "stddev: 0.0002989479894157214",
            "extra": "mean: 8.793868542061022 msec\nrounds: 107"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 114.15385356759933,
            "unit": "iter/sec",
            "range": "stddev: 0.0002439320063206041",
            "extra": "mean: 8.760107247783997 msec\nrounds: 113"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 46.73283151578672,
            "unit": "iter/sec",
            "range": "stddev: 0.00019768602642160932",
            "extra": "mean: 21.398232625005658 msec\nrounds: 48"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 2.244925484902328,
            "unit": "iter/sec",
            "range": "stddev: 0.0055048852492330476",
            "extra": "mean: 445.4490835999877 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 9.814451002385695,
            "unit": "iter/sec",
            "range": "stddev: 0.0012252658269554263",
            "extra": "mean: 101.89056929999651 msec\nrounds: 10"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 44.79162327686525,
            "unit": "iter/sec",
            "range": "stddev: 0.00006341017973622894",
            "extra": "mean: 22.325603022217262 msec\nrounds: 45"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation]",
            "value": 1.555011783899541,
            "unit": "iter/sec",
            "range": "stddev: 0.008386178953998112",
            "extra": "mean: 643.0819433999886 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation]",
            "value": 8.934211915633062,
            "unit": "iter/sec",
            "range": "stddev: 0.0001404662427299995",
            "extra": "mean: 111.92929039999626 msec\nrounds: 10"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.07281477091819073,
            "unit": "iter/sec",
            "range": "stddev: 0.10182443981387712",
            "extra": "mean: 13.733477251799991 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.3596199796448773,
            "unit": "iter/sec",
            "range": "stddev: 0.0027548071358915846",
            "extra": "mean: 2.7807131321999803 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation]",
            "value": 8.97802383476504,
            "unit": "iter/sec",
            "range": "stddev: 0.0001546231849918014",
            "extra": "mean: 111.38308590001316 msec\nrounds: 10"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation]",
            "value": 3.871114147472355,
            "unit": "iter/sec",
            "range": "stddev: 0.21683987689114875",
            "extra": "mean: 258.3235631666791 msec\nrounds: 6"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation]",
            "value": 14.660119696985094,
            "unit": "iter/sec",
            "range": "stddev: 0.007522641782627537",
            "extra": "mean: 68.21226706666341 msec\nrounds: 15"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.07470482614414395,
            "unit": "iter/sec",
            "range": "stddev: 0.02502216973472739",
            "extra": "mean: 13.386016026200059 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.3394624150445734,
            "unit": "iter/sec",
            "range": "stddev: 0.005339405133592827",
            "extra": "mean: 2.9458342240000093 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation]",
            "value": 15.068732769681409,
            "unit": "iter/sec",
            "range": "stddev: 0.00011838257567641056",
            "extra": "mean: 66.36258106667205 msec\nrounds: 15"
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
          "id": "523d2880cf30893ca8f4aaa7bfb5f5168d6769a7",
          "message": "Split requirements for docs",
          "timestamp": "2024-04-22T20:51:03Z",
          "url": "https://github.com/alcides/GeneticEngine/pull/178/commits/523d2880cf30893ca8f4aaa7bfb5f5168d6769a7"
        },
        "date": 1713820005051,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 16420.72702388261,
            "unit": "iter/sec",
            "range": "stddev: 0.00001892975640705334",
            "extra": "mean: 60.8986434367724 usec\nrounds: 20577"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 17038.67905291268,
            "unit": "iter/sec",
            "range": "stddev: 0.00001828424337127074",
            "extra": "mean: 58.68999567950984 usec\nrounds: 22915"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 15120.224634303198,
            "unit": "iter/sec",
            "range": "stddev: 0.00002171244180243813",
            "extra": "mean: 66.13658356181453 usec\nrounds: 19333"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 114.39038770890066,
            "unit": "iter/sec",
            "range": "stddev: 0.00023317869951680113",
            "extra": "mean: 8.7419932743369 msec\nrounds: 113"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 113.33506072982551,
            "unit": "iter/sec",
            "range": "stddev: 0.0003695401271766918",
            "extra": "mean: 8.823394927928403 msec\nrounds: 111"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 114.4134169377551,
            "unit": "iter/sec",
            "range": "stddev: 0.00022069671053385228",
            "extra": "mean: 8.74023367857316 msec\nrounds: 112"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 112.49020045888001,
            "unit": "iter/sec",
            "range": "stddev: 0.0005222886880509435",
            "extra": "mean: 8.889663241070878 msec\nrounds: 112"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 114.18368871308336,
            "unit": "iter/sec",
            "range": "stddev: 0.0002416263919997384",
            "extra": "mean: 8.75781831249789 msec\nrounds: 112"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 46.432743110629296,
            "unit": "iter/sec",
            "range": "stddev: 0.0005692892866511934",
            "extra": "mean: 21.53652644680994 msec\nrounds: 47"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 2.2642005046093074,
            "unit": "iter/sec",
            "range": "stddev: 0.003141440485402387",
            "extra": "mean: 441.6569989999857 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 9.677737936606288,
            "unit": "iter/sec",
            "range": "stddev: 0.0020477707527702524",
            "extra": "mean: 103.32993169999725 msec\nrounds: 10"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 47.04787170738678,
            "unit": "iter/sec",
            "range": "stddev: 0.0000663036902031147",
            "extra": "mean: 21.254946583332785 msec\nrounds: 48"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation]",
            "value": 1.5705967822508402,
            "unit": "iter/sec",
            "range": "stddev: 0.008144734527330909",
            "extra": "mean: 636.7006549999985 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation]",
            "value": 8.762517778747018,
            "unit": "iter/sec",
            "range": "stddev: 0.005015544387737104",
            "extra": "mean: 114.12245033333255 msec\nrounds: 9"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.07297381360594234,
            "unit": "iter/sec",
            "range": "stddev: 0.1897602897369925",
            "extra": "mean: 13.703545841800008 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.3623798798204076,
            "unit": "iter/sec",
            "range": "stddev: 0.028531969460026393",
            "extra": "mean: 2.7595351058000004 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation]",
            "value": 8.902255566272599,
            "unit": "iter/sec",
            "range": "stddev: 0.0009594704721029186",
            "extra": "mean: 112.33108200000856 msec\nrounds: 10"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation]",
            "value": 3.8128252513900467,
            "unit": "iter/sec",
            "range": "stddev: 0.2217962907511674",
            "extra": "mean: 262.27270699999394 msec\nrounds: 6"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation]",
            "value": 14.582735370294396,
            "unit": "iter/sec",
            "range": "stddev: 0.00423949894523892",
            "extra": "mean: 68.5742403333355 msec\nrounds: 15"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.07724169640265853,
            "unit": "iter/sec",
            "range": "stddev: 0.06211425482619778",
            "extra": "mean: 12.94637542380001 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.3486501776415635,
            "unit": "iter/sec",
            "range": "stddev: 0.026456219011305397",
            "extra": "mean: 2.8682044758000074 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation]",
            "value": 14.662701874683101,
            "unit": "iter/sec",
            "range": "stddev: 0.00021034480050561978",
            "extra": "mean: 68.20025453334893 msec\nrounds: 15"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7fc4424fb2fe7cac6535cd7476aae8fb64bb58ab",
          "message": "Merge pull request #178 from alcides/new_docs\n\nSplit requirements for docs",
          "timestamp": "2024-04-22T22:21:53+01:00",
          "tree_id": "ff8213d043bd68bf10b4b3da2e3c9212ee54dc56",
          "url": "https://github.com/alcides/GeneticEngine/commit/7fc4424fb2fe7cac6535cd7476aae8fb64bb58ab"
        },
        "date": 1713821327446,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[full_method]",
            "value": 16559.16764489193,
            "unit": "iter/sec",
            "range": "stddev: 0.000018886013487663723",
            "extra": "mean: 60.389508787204875 usec\nrounds: 21736"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[grow_method]",
            "value": 17176.7373093343,
            "unit": "iter/sec",
            "range": "stddev: 0.000018400096379327144",
            "extra": "mean: 58.218274052347134 usec\nrounds: 22846"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization[pi_grow_method]",
            "value": 15451.725652424971,
            "unit": "iter/sec",
            "range": "stddev: 0.0000198002937465252",
            "extra": "mean: 64.71769059937078 usec\nrounds: 19722"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-FullInitializer]",
            "value": 113.0088921046566,
            "unit": "iter/sec",
            "range": "stddev: 0.0002970500751584006",
            "extra": "mean: 8.848861194691727 msec\nrounds: 113"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-GrowInitializer]",
            "value": 113.51118105049272,
            "unit": "iter/sec",
            "range": "stddev: 0.0002792497607896853",
            "extra": "mean: 8.809704830356527 msec\nrounds: 112"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-PositionIndependentGrowInitializer]",
            "value": 113.1243724368648,
            "unit": "iter/sec",
            "range": "stddev: 0.00021617805129584933",
            "extra": "mean: 8.839828044642672 msec\nrounds: 112"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedInitializer]",
            "value": 112.99136892522408,
            "unit": "iter/sec",
            "range": "stddev: 0.0003627915867155023",
            "extra": "mean: 8.850233513515395 msec\nrounds: 111"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[TreeBasedRepresentation-RampedHalfAndHalfInitializer]",
            "value": 112.97667216759292,
            "unit": "iter/sec",
            "range": "stddev: 0.00027958380535517857",
            "extra": "mean: 8.851384810809177 msec\nrounds: 111"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[GrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 46.30153833097724,
            "unit": "iter/sec",
            "range": "stddev: 0.0006365974686499516",
            "extra": "mean: 21.59755455319219 msec\nrounds: 47"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 2.2538555862317753,
            "unit": "iter/sec",
            "range": "stddev: 0.0008233911545220521",
            "extra": "mean: 443.6841500000014 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[DynamicStructuredGrammaticalEvolutionRepresentation-GenericPopulationInitializer]",
            "value": 9.361497403264353,
            "unit": "iter/sec",
            "range": "stddev: 0.0004080666042944263",
            "extra": "mean: 106.82051779999426 msec\nrounds: 10"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_initialization_class[StackBasedGGGPRepresentation-GenericPopulationInitializer]",
            "value": 46.47906827323886,
            "unit": "iter/sec",
            "range": "stddev: 0.0002156868124504643",
            "extra": "mean: 21.515061234043017 msec\nrounds: 47"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[TreeBasedRepresentation]",
            "value": 1.5480249690309642,
            "unit": "iter/sec",
            "range": "stddev: 0.0028771837216452624",
            "extra": "mean: 645.9844124000028 msec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[GrammaticalEvolutionRepresentation]",
            "value": 8.94244970331016,
            "unit": "iter/sec",
            "range": "stddev: 0.0002821307232213054",
            "extra": "mean: 111.82618109999964 msec\nrounds: 10"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.07237983422688751,
            "unit": "iter/sec",
            "range": "stddev: 0.09171971978448623",
            "extra": "mean: 13.816002905799996 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.35547527747088065,
            "unit": "iter/sec",
            "range": "stddev: 0.021727433230249935",
            "extra": "mean: 2.8131351556000026 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_mutation[StackBasedGGGPRepresentation]",
            "value": 9.039632760218005,
            "unit": "iter/sec",
            "range": "stddev: 0.0008160045015756412",
            "extra": "mean: 110.62396300000614 msec\nrounds: 10"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[TreeBasedRepresentation]",
            "value": 3.812934933743001,
            "unit": "iter/sec",
            "range": "stddev: 0.22190461852496626",
            "extra": "mean: 262.2651624999908 msec\nrounds: 6"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[GrammaticalEvolutionRepresentation]",
            "value": 14.840413979284097,
            "unit": "iter/sec",
            "range": "stddev: 0.0005952050215475849",
            "extra": "mean: 67.38356500000009 msec\nrounds: 15"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StructuredGrammaticalEvolutionRepresentation]",
            "value": 0.07710117991324991,
            "unit": "iter/sec",
            "range": "stddev: 0.04383444207100311",
            "extra": "mean: 12.969970123999996 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[DynamicStructuredGrammaticalEvolutionRepresentation]",
            "value": 0.3481770197459081,
            "unit": "iter/sec",
            "range": "stddev: 0.019168138382802347",
            "extra": "mean: 2.87210224480001 sec\nrounds: 5"
          },
          {
            "name": "tests/gp/performance_test.py::test_bench_crossover[StackBasedGGGPRepresentation]",
            "value": 14.746956631972331,
            "unit": "iter/sec",
            "range": "stddev: 0.0023418478005450914",
            "extra": "mean: 67.81060153333176 msec\nrounds: 15"
          }
        ]
      }
    ]
  }
}