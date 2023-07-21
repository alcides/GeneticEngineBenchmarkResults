window.BENCHMARK_DATA = {
  "lastUpdate": 1689958875279,
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
      }
    ]
  }
}