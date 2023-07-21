window.BENCHMARK_DATA = {
  "lastUpdate": 1689938270565,
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
      }
    ]
  }
}