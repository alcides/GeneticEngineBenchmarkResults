window.BENCHMARK_DATA = {
  "lastUpdate": 1689939094888,
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
      }
    ]
  }
}