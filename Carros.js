const databaseAutos = [
  {
    "corporation": "Stellantis",
    "headquarters": "Países Bajos / Global",
    "brands": [
      {
        "name": "Dodge",
        "models": [
          {
            "model_name": "Avenger",
            "decade": "2000s",
            "segment": "Mid-size Sedan",
            "years_produced": [2008, 2009, 2010],
            "variants": [
              {
                "engine": "2.0L ECN I4",
                "transmission": "Manual 5-speed",
                "fuel_economy_kpl": {
                  "city": 9.8,
                  "highway": 13.6,
                  "combined": 11.2
                }
              },
              {
                "engine": "2.4L GEMA I4",
                "transmission": "Automatic 4-speed",
                "fuel_economy_kpl": {
                  "city": 8.9,
                  "highway": 12.8,
                  "combined": 10.2
                }
              },
              {
                "engine": "2.7L LH V6",
                "transmission": "Automatic 4-speed",
                "fuel_economy_kpl": {
                  "city": 8.1,
                  "highway": 11.5,
                  "combined": 9.4
                }
              }
            ]
          },
          {
            "model_name": "Neon",
            "decade": "1990s",
            "segment": "Compact",
            "years_produced": [1995, 1996, 1997, 1998, 1999],
            "variants": [
              {
                "engine": "2.0L SOHC",
                "transmission": "Manual 5-speed",
                "fuel_economy_kpl": {
                  "city": 11.1,
                  "highway": 16.1,
                  "combined": 13.2
                }
              }
            ]
          },
          {
            "model_name": "Charger",
            "decade": "2020s",
            "segment": "Muscle Car / EV",
            "years_produced": [2021, 2022, 2023, 2024, 2025, 2026],
            "variants": [
              {
                "engine": "3.0L Twin-Turbo I6 Hurricane",
                "transmission": "Automatic 8-speed",
                "fuel_economy_kpl": {
                  "city": 7.6,
                  "highway": 11.9,
                  "combined": 9.2
                }
              },
              {
                "engine": "Electric (Daytona Scat Pack)",
                "transmission": "Single-speed",
                "fuel_economy_kpl": {
                  "city": 35.0,
                  "highway": 32.0,
                  "combined": 33.5
                }
              }
            ]
          }
        ]
      },
      {
        "name": "Jeep",
        "models": [
          {
            "model_name": "Cherokee (XJ)",
            "decade": "1980s",
            "segment": "SUV",
            "years_produced": [1984, 1985, 1986, 1987, 1988, 1989],
            "variants": [
              {
                "engine": "4.0L I6",
                "transmission": "Manual 5-speed",
                "fuel_economy_kpl": {
                  "city": 6.8,
                  "highway": 9.4,
                  "combined": 7.8
                }
              }
            ]
          },
          {
            "model_name": "Liberty",
            "decade": "2000s",
            "segment": "Mid-size SUV",
            "years_produced": [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012],
            "variants": [
              {
                "engine": "3.7L V6",
                "transmission": "Automatic 4-speed",
                "fuel_economy_kpl": {
                  "city": 7.2,
                  "highway": 10.6,
                  "combined": 8.5
                }
              }
            ]
          },
          {
            "model_name": "Grand Cherokee",
            "decade": "2010s",
            "segment": "Mid-size SUV",
            "years_produced": [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
            "variants": [
              {
                "engine": "3.6L V6 Pentastar",
                "transmission": "Automatic 8-speed",
                "fuel_economy_kpl": {
                  "city": 7.6,
                  "highway": 11.5,
                  "combined": 9.2
                }
              },
              {
                "engine": "5.7L V8 HEMI",
                "transmission": "Automatic 8-speed",
                "fuel_economy_kpl": {
                  "city": 6.4,
                  "highway": 10.2,
                  "combined": 7.8
                }
              }
            ]
          }
        ]
      },
      {
        "name": "Ram",
        "models": [
          {
            "model_name": "1500 / 2500",
            "decade": "2010s",
            "segment": "Full-size Pickup",
            "years_produced": [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
            "variants": [
              {
                "engine": "5.7L V8 HEMI",
                "transmission": "Automatic 8-speed",
                "fuel_economy_kpl": {
                  "city": 6.8,
                  "highway": 10.6,
                  "combined": 8.3
                }
              },
              {
                "engine": "3.6L V6 Pentastar",
                "transmission": "Automatic 8-speed",
                "fuel_economy_kpl": {
                  "city": 8.1,
                  "highway": 11.9,
                  "combined": 9.6
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "corporation": "Toyota Motor Corporation",
    "headquarters": "Japón",
    "brands": [
      {
        "name": "Toyota",
        "models": [
          {
            "model_name": "Corolla",
            "decade": "1990s",
            "segment": "Compact",
            "years_produced": [1993, 1994, 1995, 1996, 1997],
            "variants": [
              {
                "engine": "1.6L 4A-FE",
                "transmission": "Manual 5-speed",
                "fuel_economy_kpl": {
                  "city": 11.5,
                  "highway": 14.8,
                  "combined": 12.8
                }
              }
            ]
          },
          {
            "model_name": "Corolla",
            "decade": "2020s",
            "segment": "Compact",
            "years_produced": [2020, 2021, 2022, 2023, 2024, 2025, 2026],
            "variants": [
              {
                "engine": "1.8L Hybrid",
                "transmission": "e-CVT",
                "fuel_economy_kpl": {
                  "city": 23.2,
                  "highway": 21.5,
                  "combined": 22.4
                }
              }
            ]
          },
          {
            "model_name": "Hilux",
            "decade": "2010s",
            "segment": "Mid-size Pickup",
            "years_produced": [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
            "variants": [
              {
                "engine": "2.5L D-4D Diesel",
                "transmission": "Manual 6-speed",
                "fuel_economy_kpl": {
                  "city": 10.2,
                  "highway": 14.0,
                  "combined": 11.7
                }
              },
              {
                "engine": "4.0L V6",
                "transmission": "Automatic 5-speed",
                "fuel_economy_kpl": {
                  "city": 7.6,
                  "highway": 11.1,
                  "combined": 9.0
                }
              }
            ]
          },
          {
            "model_name": "Tacoma",
            "decade": "2010s",
            "segment": "Mid-size Pickup",
            "years_produced": [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
            "variants": [
              {
                "engine": "2.7L I4",
                "transmission": "Automatic 6-speed",
                "fuel_economy_kpl": {
                  "city": 9.8,
                  "highway": 12.8,
                  "combined": 11.1
                }
              },
              {
                "engine": "3.5L V6",
                "transmission": "Automatic 6-speed",
                "fuel_economy_kpl": {
                  "city": 8.5,
                  "highway": 11.9,
                  "combined": 9.8
                }
              }
            ]
          }
        ]
      },
      {
        "name": "Lexus",
        "models": [
          {
            "model_name": "LS 400",
            "decade": "1990s",
            "segment": "Luxury Sedan",
            "years_produced": [1990, 1991, 1992, 1993, 1994],
            "variants": [
              {
                "engine": "4.0L V8",
                "transmission": "Automatic 4-speed",
                "fuel_economy_kpl": {
                  "city": 7.2,
                  "highway": 10.1,
                  "combined": 8.5
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "corporation": "Volkswagen Group",
    "headquarters": "Alemania",
    "brands": [
      {
        "name": "Volkswagen",
        "models": [
          {
            "model_name": "Jetta / Bora",
            "decade": "2000s",
            "segment": "Sedan",
            "years_produced": [2000, 2001, 2002, 2003, 2004, 2005],
            "variants": [
              {
                "engine": "2.0L I4",
                "transmission": "Manual 5-speed",
                "fuel_economy_kpl": {
                  "city": 10.2,
                  "highway": 13.1,
                  "combined": 11.5
                }
              },
              {
                "engine": "1.9L TDI (Diesel)",
                "transmission": "Manual 5-speed",
                "fuel_economy_kpl": {
                  "city": 14.4,
                  "highway": 20.8,
                  "combined": 17.0
                }
              }
            ]
          }
        ]
      },
      {
        "name": "Audi",
        "models": [
          {
            "model_name": "A4",
            "decade": "2010s",
            "segment": "Compact Executive",
            "years_produced": [2012, 2013, 2014, 2015],
            "variants": [
              {
                "engine": "2.0L TFSI",
                "transmission": "Stronic 7-speed",
                "fuel_economy_kpl": {
                  "city": 10.5,
                  "highway": 15.2,
                  "combined": 12.4
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "corporation": "General Motors",
    "headquarters": "Estados Unidos",
    "brands": [
      {
        "name": "Chevrolet",
        "models": [
          {
            "model_name": "Chevy / Corvette C4",
            "decade": "1980s",
            "segment": "Sports Car",
            "years_produced": [1984, 1985, 1986, 1987, 1988, 1989],
            "variants": [
              {
                "engine": "5.7L V8 L98",
                "transmission": "Manual 4-speed",
                "fuel_economy_kpl": {
                  "city": 7.2,
                  "highway": 10.6,
                  "combined": 8.5
                }
              }
            ]
          },
          {
            "model_name": "Chevy Pop",
            "decade": "2000s",
            "segment": "Subcompact",
            "years_produced": [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010],
            "variants": [
              {
                "engine": "1.6L I4",
                "transmission": "Manual 5-speed",
                "fuel_economy_kpl": {
                  "city": 10.5,
                  "highway": 14.8,
                  "combined": 12.4
                }
              },
              {
                "engine": "1.6L I4",
                "transmission": "Automatic 3-speed",
                "fuel_economy_kpl": {
                  "city": 9.0,
                  "highway": 12.5,
                  "combined": 10.5
                }
              }
            ]
          },
          {
            "model_name": "Corvette C1",
            "decade": "1950s",
            "segment": "Sports Car",
            "years_produced": [1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962],
            "variants": [
              {
                "engine": "4.6L V8",
                "transmission": "Manual 3-speed",
                "fuel_economy_kpl": {
                  "city": 5.5,
                  "highway": 8.5,
                  "combined": 6.8
                }
              }
            ]
          },
          {
            "model_name": "Corvette C2",
            "decade": "1960s",
            "segment": "Sports Car",
            "years_produced": [1963, 1964, 1965, 1966, 1967],
            "variants": [
              {
                "engine": "5.4L V8 (327)",
                "transmission": "Manual 4-speed",
                "fuel_economy_kpl": {
                  "city": 5.0,
                  "highway": 8.0,
                  "combined": 6.2
                }
              },
              {
                "engine": "7.0L V8 (427)",
                "transmission": "Manual 4-speed",
                "fuel_economy_kpl": {
                  "city": 3.8,
                  "highway": 6.5,
                  "combined": 4.9
                }
              }
            ]
          },
          {
            "model_name": "Corvette C3",
            "decade": "1970s",
            "segment": "Sports Car",
            "years_produced": [1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982],
            "variants": [
              {
                "engine": "5.7L V8 L82",
                "transmission": "Manual 4-speed",
                "fuel_economy_kpl": {
                  "city": 5.5,
                  "highway": 9.0,
                  "combined": 6.9
                }
              },
              {
                "engine": "5.7L V8 (1982 Cross-Fire)",
                "transmission": "Automatic 4-speed",
                "fuel_economy_kpl": {
                  "city": 7.0,
                  "highway": 11.0,
                  "combined": 8.5
                }
              }
            ]
          },
          {
            "model_name": "Corvette C5",
            "decade": "2000s",
            "segment": "Sports Car",
            "years_produced": [1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004],
            "variants": [
              {
                "engine": "5.7L V8 LS1",
                "transmission": "Manual 6-speed",
                "fuel_economy_kpl": {
                  "city": 9.4,
                  "highway": 13.6,
                  "combined": 11.1
                }
              },
              {
                "engine": "5.7L V8 LS1",
                "transmission": "Automatic 4-speed",
                "fuel_economy_kpl": {
                  "city": 8.9,
                  "highway": 12.8,
                  "combined": 10.6
                }
              }
            ]
          },
          {
            "model_name": "Corvette C6",
            "decade": "2000s",
            "segment": "Sports Car",
            "years_produced": [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013],
            "variants": [
              {
                "engine": "6.0L V8 LS2",
                "transmission": "Manual 6-speed",
                "fuel_economy_kpl": {
                  "city": 9.8,
                  "highway": 14.0,
                  "combined": 11.5
                }
              },
              {
                "engine": "6.2L V8 LS3",
                "transmission": "Automatic 6-speed",
                "fuel_economy_kpl": {
                  "city": 10.2,
                  "highway": 14.5,
                  "combined": 11.9
                }
              }
            ]
          },
          {
            "model_name": "Corvette C7",
            "decade": "2010s",
            "segment": "Sports Car",
            "years_produced": [2014, 2015, 2016, 2017, 2018, 2019],
            "variants": [
              {
                "engine": "6.2L V8 LT1",
                "transmission": "Manual 7-speed",
                "fuel_economy_kpl": {
                  "city": 10.6,
                  "highway": 15.3,
                  "combined": 12.5
                }
              },
              {
                "engine": "6.2L V8 LT1",
                "transmission": "Automatic 8-speed",
                "fuel_economy_kpl": {
                  "city": 10.2,
                  "highway": 14.9,
                  "combined": 12.1
                }
              }
            ]
          },
          {
            "model_name": "Corvette C8",
            "decade": "2020s",
            "segment": "Sports Car",
            "years_produced": [2020, 2021, 2022, 2023, 2024, 2025, 2026],
            "variants": [
              {
                "engine": "6.2L V8 LT2",
                "transmission": "DCT 8-speed",
                "fuel_economy_kpl": {
                  "city": 11.5,
                  "highway": 16.6,
                  "combined": 13.6
                }
              },
              {
                "engine": "5.5L V8 LT6 (Z06)",
                "transmission": "DCT 8-speed",
                "fuel_economy_kpl": {
                  "city": 9.8,
                  "highway": 14.5,
                  "combined": 11.7
                }
              }
            ]
          },
          {
            "model_name": "Camaro 1st Gen",
            "decade": "1960s",
            "segment": "Muscle Car",
            "years_produced": [1967, 1968, 1969],
            "variants": [
              {
                "engine": "6.5L V8 (396)",
                "transmission": "Manual 4-speed",
                "fuel_economy_kpl": {
                  "city": 4.5,
                  "highway": 7.5,
                  "combined": 5.7
                }
              },
              {
                "engine": "5.0L V8 (302)",
                "transmission": "Manual 4-speed",
                "fuel_economy_kpl": {
                  "city": 5.0,
                  "highway": 8.0,
                  "combined": 6.2
                }
              }
            ]
          },
          {
            "model_name": "Camaro 2nd Gen",
            "decade": "1970s",
            "segment": "Muscle Car",
            "years_produced": [1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981],
            "variants": [
              {
                "engine": "5.7L V8 LT-1",
                "transmission": "Manual 4-speed",
                "fuel_economy_kpl": {
                  "city": 5.0,
                  "highway": 8.5,
                  "combined": 6.4
                }
              },
              {
                "engine": "5.0L V8 (305)",
                "transmission": "Automatic 3-speed",
                "fuel_economy_kpl": {
                  "city": 6.5,
                  "highway": 10.5,
                  "combined": 8.1
                }
              }
            ]
          },
          {
            "model_name": "Camaro 3rd Gen",
            "decade": "1980s",
            "segment": "Muscle Car",
            "years_produced": [1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992],
            "variants": [
              {
                "engine": "5.0L V8 TPI (305)",
                "transmission": "Manual 5-speed",
                "fuel_economy_kpl": {
                  "city": 7.5,
                  "highway": 11.5,
                  "combined": 9.1
                }
              },
              {
                "engine": "2.8L V6",
                "transmission": "Automatic 4-speed",
                "fuel_economy_kpl": {
                  "city": 8.5,
                  "highway": 12.5,
                  "combined": 10.1
                }
              }
            ]
          },
          {
            "model_name": "Camaro 4th Gen",
            "decade": "1990s",
            "segment": "Muscle Car",
            "years_produced": [1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002],
            "variants": [
              {
                "engine": "5.7L V8 LT1",
                "transmission": "Manual 6-speed",
                "fuel_economy_kpl": {
                  "city": 8.5,
                  "highway": 13.0,
                  "combined": 10.3
                }
              },
              {
                "engine": "5.7L V8 LS1",
                "transmission": "Automatic 4-speed",
                "fuel_economy_kpl": {
                  "city": 9.0,
                  "highway": 13.5,
                  "combined": 10.8
                }
              }
            ]
          },
          {
            "model_name": "Camaro 5th Gen",
            "decade": "2010s",
            "segment": "Muscle Car",
            "years_produced": [2010, 2011, 2012, 2013, 2014, 2015],
            "variants": [
              {
                "engine": "6.2L V8 LS3 (SS)",
                "transmission": "Manual 6-speed",
                "fuel_economy_kpl": {
                  "city": 8.9,
                  "highway": 13.6,
                  "combined": 10.8
                }
              },
              {
                "engine": "3.6L V6",
                "transmission": "Automatic 6-speed",
                "fuel_economy_kpl": {
                  "city": 11.1,
                  "highway": 16.6,
                  "combined": 13.4
                }
              }
            ]
          },
          {
            "model_name": "Camaro 6th Gen",
            "decade": "2020s",
            "segment": "Muscle Car",
            "years_produced": [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
            "variants": [
              {
                "engine": "6.2L V8 LT1 (SS)",
                "transmission": "Manual 6-speed",
                "fuel_economy_kpl": {
                  "city": 10.2,
                  "highway": 15.3,
                  "combined": 12.3
                }
              },
              {
                "engine": "2.0L Turbo I4",
                "transmission": "Automatic 8-speed",
                "fuel_economy_kpl": {
                  "city": 12.8,
                  "highway": 18.7,
                  "combined": 15.1
                }
              }
            ]
          },
          {
            "model_name": "Silverado / Cheyenne",
            "decade": "2010s",
            "segment": "Full-size Pickup",
            "years_produced": [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
            "variants": [
              {
                "engine": "5.3L V8 EcoTec3",
                "transmission": "Automatic 6-speed",
                "fuel_economy_kpl": {
                  "city": 7.6,
                  "highway": 11.5,
                  "combined": 9.2
                }
              },
              {
                "engine": "6.2L V8 EcoTec3",
                "transmission": "Automatic 8-speed",
                "fuel_economy_kpl": {
                  "city": 6.8,
                  "highway": 10.6,
                  "combined": 8.3
                }
              }
            ]
          },
          {
            "model_name": "Aveo",
            "decade": "2010s",
            "segment": "Subcompact",
            "years_produced": [2010, 2011, 2012, 2013, 2014, 2015],
            "variants": [
              {
                "engine": "1.6L I4",
                "transmission": "Manual 5-speed",
                "fuel_economy_kpl": {
                  "city": 11.9,
                  "highway": 16.2,
                  "combined": 13.6
                }
              },
              {
                "engine": "1.6L I4",
                "transmission": "Automatic 4-speed",
                "fuel_economy_kpl": {
                  "city": 10.2,
                  "highway": 14.0,
                  "combined": 11.7
                }
              }
            ]
          },
          {
            "model_name": "Malibu",
            "decade": "2010s",
            "segment": "Mid-size Sedan",
            "years_produced": [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
            "variants": [
              {
                "engine": "2.5L I4 Ecotec",
                "transmission": "Automatic 6-speed",
                "fuel_economy_kpl": {
                  "city": 10.6,
                  "highway": 15.3,
                  "combined": 12.5
                }
              },
              {
                "engine": "2.0L Turbo I4",
                "transmission": "Automatic 6-speed",
                "fuel_economy_kpl": {
                  "city": 9.4,
                  "highway": 13.6,
                  "combined": 11.1
                }
              }
            ]
          },
          {
            "model_name": "Impala",
            "decade": "2010s",
            "segment": "Full-size Sedan",
            "years_produced": [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
            "variants": [
              {
                "engine": "3.6L V6",
                "transmission": "Automatic 6-speed",
                "fuel_economy_kpl": {
                  "city": 9.8,
                  "highway": 14.9,
                  "combined": 11.9
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "corporation": "Ford Motor Company",
    "headquarters": "Estados Unidos",
    "brands": [
      {
        "name": "Ford",
        "models": [
          {
            "model_name": "Escort",
            "decade": "1990s",
            "segment": "Compact",
            "years_produced": [1994],
            "variants": [
              {
                "engine": "1.9L I4",
                "transmission": "Manual 5-speed",
                "fuel_economy_kpl": {
                  "city": 9.5,
                  "highway": 13.0,
                  "combined": 10.8
                }
              }
            ]
          },
          {
            "model_name": "Mustang 1st Gen",
            "decade": "1960s",
            "segment": "Muscle Car",
            "years_produced": [1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973],
            "variants": [
              {
                "engine": "4.7L V8 (289)",
                "transmission": "Manual 4-speed",
                "fuel_economy_kpl": {
                  "city": 5.5,
                  "highway": 8.5,
                  "combined": 6.8
                }
              },
              {
                "engine": "7.0L V8 (428 Cobra Jet)",
                "transmission": "Manual 4-speed",
                "fuel_economy_kpl": {
                  "city": 3.5,
                  "highway": 6.0,
                  "combined": 4.5
                }
              }
            ]
          },
          {
            "model_name": "Mustang 2nd Gen (Mustang II)",
            "decade": "1970s",
            "segment": "Muscle Car",
            "years_produced": [1974, 1975, 1976, 1977, 1978],
            "variants": [
              {
                "engine": "2.8L V6",
                "transmission": "Manual 4-speed",
                "fuel_economy_kpl": {
                  "city": 7.0,
                  "highway": 11.0,
                  "combined": 8.6
                }
              },
              {
                "engine": "5.0L V8 (302)",
                "transmission": "Automatic 3-speed",
                "fuel_economy_kpl": {
                  "city": 5.5,
                  "highway": 9.0,
                  "combined": 6.9
                }
              }
            ]
          },
          {
            "model_name": "Mustang 3rd Gen (Fox Body)",
            "decade": "1980s",
            "segment": "Muscle Car",
            "years_produced": [1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993],
            "variants": [
              {
                "engine": "5.0L V8 (302)",
                "transmission": "Manual 5-speed",
                "fuel_economy_kpl": {
                  "city": 8.0,
                  "highway": 12.5,
                  "combined": 9.8
                }
              },
              {
                "engine": "2.3L Turbo I4 (SVO)",
                "transmission": "Manual 5-speed",
                "fuel_economy_kpl": {
                  "city": 8.5,
                  "highway": 13.0,
                  "combined": 10.3
                }
              }
            ]
          },
          {
            "model_name": "Mustang 4th Gen (SN-95)",
            "decade": "1990s",
            "segment": "Muscle Car",
            "years_produced": [1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004],
            "variants": [
              {
                "engine": "4.6L V8 Modular",
                "transmission": "Manual 5-speed",
                "fuel_economy_kpl": {
                  "city": 8.5,
                  "highway": 12.5,
                  "combined": 10.1
                }
              },
              {
                "engine": "3.8L V6",
                "transmission": "Automatic 4-speed",
                "fuel_economy_kpl": {
                  "city": 9.5,
                  "highway": 14.0,
                  "combined": 11.3
                }
              }
            ]
          },
          {
            "model_name": "Mustang 5th Gen (S197)",
            "decade": "2000s",
            "segment": "Muscle Car",
            "years_produced": [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014],
            "variants": [
              {
                "engine": "4.6L V8 (GT)",
                "transmission": "Manual 5-speed",
                "fuel_economy_kpl": {
                  "city": 8.9,
                  "highway": 13.6,
                  "combined": 10.8
                }
              },
              {
                "engine": "5.0L V8 Coyote (GT)",
                "transmission": "Manual 6-speed",
                "fuel_economy_kpl": {
                  "city": 9.8,
                  "highway": 15.3,
                  "combined": 12.0
                }
              }
            ]
          },
          {
            "model_name": "Mustang 6th Gen (S550)",
            "decade": "2010s",
            "segment": "Muscle Car",
            "years_produced": [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
            "variants": [
              {
                "engine": "5.0L V8 Coyote (GT)",
                "transmission": "Manual 6-speed",
                "fuel_economy_kpl": {
                  "city": 10.2,
                  "highway": 15.7,
                  "combined": 12.4
                }
              },
              {
                "engine": "2.3L EcoBoost I4",
                "transmission": "Automatic 10-speed",
                "fuel_economy_kpl": {
                  "city": 12.3,
                  "highway": 18.7,
                  "combined": 14.9
                }
              }
            ]
          },
          {
            "model_name": "Mustang 7th Gen (S650)",
            "decade": "2020s",
            "segment": "Muscle Car",
            "years_produced": [2024, 2025, 2026],
            "variants": [
              {
                "engine": "5.0L V8 Coyote (GT)",
                "transmission": "Manual 6-speed",
                "fuel_economy_kpl": {
                  "city": 10.6,
                  "highway": 16.2,
                  "combined": 12.9
                }
              },
              {
                "engine": "2.3L EcoBoost I4",
                "transmission": "Automatic 10-speed",
                "fuel_economy_kpl": {
                  "city": 12.8,
                  "highway": 18.7,
                  "combined": 15.1
                }
              }
            ]
          },
          {
            "model_name": "F-150 / Lobo",
            "decade": "2010s",
            "segment": "Full-size Pickup",
            "years_produced": [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
            "variants": [
              {
                "engine": "3.5L EcoBoost V6",
                "transmission": "Automatic 6-speed",
                "fuel_economy_kpl": {
                  "city": 8.5,
                  "highway": 12.3,
                  "combined": 10.0
                }
              },
              {
                "engine": "5.0L V8 Coyote",
                "transmission": "Automatic 6-speed",
                "fuel_economy_kpl": {
                  "city": 7.2,
                  "highway": 11.1,
                  "combined": 8.9
                }
              }
            ]
          },
          {
            "model_name": "Focus",
            "decade": "2010s",
            "segment": "Compact",
            "years_produced": [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
            "variants": [
              {
                "engine": "2.0L I4 Duratec",
                "transmission": "Manual 5-speed",
                "fuel_economy_kpl": {
                  "city": 10.6,
                  "highway": 14.5,
                  "combined": 12.2
                }
              },
              {
                "engine": "2.0L I4 Duratec",
                "transmission": "Automatic 6-speed",
                "fuel_economy_kpl": {
                  "city": 9.8,
                  "highway": 13.6,
                  "combined": 11.3
                }
              }
            ]
          },
          {
            "model_name": "Fusion",
            "decade": "2010s",
            "segment": "Mid-size Sedan",
            "years_produced": [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
            "variants": [
              {
                "engine": "2.5L I4 Duratec",
                "transmission": "Automatic 6-speed",
                "fuel_economy_kpl": {
                  "city": 10.2,
                  "highway": 14.9,
                  "combined": 12.1
                }
              },
              {
                "engine": "2.0L EcoBoost I4",
                "transmission": "Automatic 6-speed",
                "fuel_economy_kpl": {
                  "city": 9.4,
                  "highway": 13.6,
                  "combined": 11.1
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "corporation": "Nissan Motor Corporation",
    "headquarters": "Japón",
    "brands": [
      {
        "name": "Nissan",
        "models": [
          {
            "model_name": "NP300 / Frontier",
            "decade": "2010s",
            "segment": "Mid-size Pickup",
            "years_produced": [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
            "variants": [
              {
                "engine": "2.5L I4",
                "transmission": "Manual 6-speed",
                "fuel_economy_kpl": {
                  "city": 9.4,
                  "highway": 12.8,
                  "combined": 10.8
                }
              },
              {
                "engine": "4.0L V6",
                "transmission": "Automatic 5-speed",
                "fuel_economy_kpl": {
                  "city": 7.6,
                  "highway": 11.1,
                  "combined": 9.0
                }
              }
            ]
          },
          {
            "model_name": "Versa",
            "decade": "2010s",
            "segment": "Subcompact",
            "years_produced": [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
            "variants": [
              {
                "engine": "1.6L I4 HR16DE",
                "transmission": "Manual 5-speed",
                "fuel_economy_kpl": {
                  "city": 12.8,
                  "highway": 17.0,
                  "combined": 14.5
                }
              },
              {
                "engine": "1.6L I4 HR16DE",
                "transmission": "Automatic CVT",
                "fuel_economy_kpl": {
                  "city": 14.0,
                  "highway": 18.7,
                  "combined": 15.9
                }
              }
            ]
          },
          {
            "model_name": "Sentra",
            "decade": "2010s",
            "segment": "Compact",
            "years_produced": [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
            "variants": [
              {
                "engine": "1.8L I4 MR18DE",
                "transmission": "Automatic CVT",
                "fuel_economy_kpl": {
                  "city": 11.9,
                  "highway": 16.2,
                  "combined": 13.6
                }
              },
              {
                "engine": "2.0L I4 MR20DE",
                "transmission": "Automatic CVT",
                "fuel_economy_kpl": {
                  "city": 11.1,
                  "highway": 15.3,
                  "combined": 12.8
                }
              }
            ]
          },
          {
            "model_name": "March",
            "decade": "2010s",
            "segment": "Subcompact",
            "years_produced": [2010, 2011, 2012, 2013, 2014, 2015],
            "variants": [
              {
                "engine": "1.6L I4 HR16DE",
                "transmission": "Manual 5-speed",
                "fuel_economy_kpl": {
                  "city": 12.8,
                  "highway": 17.4,
                  "combined": 14.6
                }
              },
              {
                "engine": "1.6L I4 HR16DE",
                "transmission": "Automatic 4-speed",
                "fuel_economy_kpl": {
                  "city": 11.1,
                  "highway": 15.3,
                  "combined": 12.8
                }
              }
            ]
          },
          {
            "model_name": "Kicks",
            "decade": "2020s",
            "segment": "Subcompact SUV",
            "years_produced": [2018, 2019, 2020, 2021, 2022, 2023, 2024],
            "variants": [
              {
                "engine": "1.6L I4 HR16DE",
                "transmission": "Automatic CVT",
                "fuel_economy_kpl": {
                  "city": 11.9,
                  "highway": 16.2,
                  "combined": 13.6
                }
              }
            ]
          },
          {
            "model_name": "X-Trail",
            "decade": "2010s",
            "segment": "Compact SUV",
            "years_produced": [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
            "variants": [
              {
                "engine": "2.5L I4 QR25DE",
                "transmission": "Automatic CVT",
                "fuel_economy_kpl": {
                  "city": 9.8,
                  "highway": 13.6,
                  "combined": 11.3
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "corporation": "Kia Corporation",
    "headquarters": "Corea del Sur",
    "brands": [
      {
        "name": "Kia",
        "models": [
          {
            "model_name": "K3",
            "decade": "2020s",
            "segment": "Compact",
            "years_produced": [2020, 2021, 2022, 2023, 2024],
            "variants": [
              {
                "engine": "1.6L I4",
                "transmission": "Automatic 6-speed",
                "fuel_economy_kpl": {
                  "city": 11.9,
                  "highway": 16.6,
                  "combined": 13.8
                }
              },
              {
                "engine": "2.0L I4",
                "transmission": "Automatic 6-speed",
                "fuel_economy_kpl": {
                  "city": 10.6,
                  "highway": 15.3,
                  "combined": 12.5
                }
              }
            ]
          },
          {
            "model_name": "Seltos",
            "decade": "2020s",
            "segment": "Subcompact SUV",
            "years_produced": [2020, 2021, 2022, 2023, 2024],
            "variants": [
              {
                "engine": "1.6L Turbo I4",
                "transmission": "Automatic 7-speed DCT",
                "fuel_economy_kpl": {
                  "city": 10.2,
                  "highway": 14.0,
                  "combined": 11.7
                }
              },
              {
                "engine": "2.0L I4",
                "transmission": "Automatic CVT",
                "fuel_economy_kpl": {
                  "city": 11.1,
                  "highway": 14.9,
                  "combined": 12.6
                }
              }
            ]
          },
          {
            "model_name": "Sportage",
            "decade": "2010s",
            "segment": "Compact SUV",
            "years_produced": [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
            "variants": [
              {
                "engine": "2.4L I4",
                "transmission": "Automatic 6-speed",
                "fuel_economy_kpl": {
                  "city": 9.4,
                  "highway": 13.2,
                  "combined": 11.1
                }
              },
              {
                "engine": "2.0L Turbo I4",
                "transmission": "Automatic 6-speed",
                "fuel_economy_kpl": {
                  "city": 8.5,
                  "highway": 11.9,
                  "combined": 9.8
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "corporation": "Honda Motor Company",
    "headquarters": "Japón",
    "brands": [
      {
        "name": "Honda",
        "models": [
          {
            "model_name": "CR-V",
            "decade": "2010s",
            "segment": "Compact SUV",
            "years_produced": [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
            "variants": [
              {
                "engine": "2.4L I4",
                "transmission": "Automatic 5-speed",
                "fuel_economy_kpl": {
                  "city": 10.2,
                  "highway": 13.6,
                  "combined": 11.5
                }
              },
              {
                "engine": "1.5L Turbo I4",
                "transmission": "Automatic CVT",
                "fuel_economy_kpl": {
                  "city": 11.9,
                  "highway": 15.7,
                  "combined": 13.4
                }
              }
            ]
          }
        ]
      }
    ]
  }
];
