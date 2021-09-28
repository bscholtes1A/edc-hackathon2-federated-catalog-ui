const data = [
  {
    id: "edc:gaiax-demo:1a:flight",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/8d/Amadeus_%28CRS%29_Logo.svg",
    title: "6X SKD",
    description: "Schedule information for 6X carrier",
    exemple: {
      id: "6X-2020-2020-09-11",
      version: "1599480606",
      event: {
        qualifiers: ["SKD_CANCELLATION"],
        source: "SKD",
        timestamp: "2020-09-07T12:10:06.293033633Z"
      },
      flightDesignator: {
        carrierCode: "6X",
        flightNumber: "2020"
      },
      scheduledDepartureDate: "2020-09-11",
      dayOfOperation: "FRI",
      isCancelled: true,
      characteristics: ["ADHOC", "INTERNATIONAL"],
      codeshare: "PRIME"
    },
    keywords: ["schedule", "flight", "open"]
  },
  {
    id: "edc:gaiax-demo:1a:pnr",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/8d/Amadeus_%28CRS%29_Logo.svg",
    title: "6X PNR",
    description: "Passenger name record for passenger of 6X carrier",
    exemple: {
      id: "USSVAT-2021-04-14",
      type: "pnr",
      reference: "USSVAT",
      version: "3",
      purgeDate: {
        date: "2021-05-22"
      },
      owner: {
        office: {
          id: "LON6X0100",
          iataNumber: "91496716",
          systemCode: "6X",
          agentType: "AIRLINE"
        },
        login: {
          initials: "AT",
          dutyCode: "SU",
          countryCode: "GB",
          cityCode: "LON"
        }
      },
      creation: {
        dateTime: "2021-04-14T16:24:00Z",
        pointOfSale: {
          office: {
            id: "LON6X0100",
            iataNumber: "91496716",
            systemCode: "6X",
            agentType: "AIRLINE"
          },
          login: {
            numericSign: "6441",
            initials: "AT",
            countryCode: "GB",
            cityCode: "LON"
          }
        },
        comment: "ATC-1A/ATCTEAM"
      },
      lastModification: {
        dateTime: "2021-04-14T16:24:00Z",
        pointOfSale: {
          office: {
            id: "LON6X0100",
            iataNumber: "91496716",
            systemCode: "6X",
            agentType: "AIRLINE"
          },
          login: {
            numericSign: "6441",
            initials: "AT",
            dutyCode: "SU",
            countryCode: "GB",
            cityCode: "LON"
          }
        },
        comment: "XCL-1A/ATCTEAM"
      },
      queuingOffice: {
        id: "LON6X0100"
      },
      nip: 1,
      travelers: [
        {
          type: "stakeholder",
          id: "USSVAT-2021-04-14-PT-1",
          names: [
            {
              firstName: "EMKZUR",
              lastName: "VNMXATCRESPTIMEPDT"
            }
          ],
          gender: "UNKNOWN",
          contacts: [
            {
              type: "contact",
              id: "USSVAT-2021-04-14-OT-2",
              ref: "processedPnr.contacts"
            }
          ],
          passenger: {
            uniqueIdentifier: "2301CEFF0000CB77"
          }
        }
      ],
      contacts: [
        {
          type: "contact",
          id: "USSVAT-2021-04-14-OT-2",
          phone: {
            category: "PERSONAL",
            deviceType: "MOBILE",
            number: "FRA000000000"
          },
          purpose: ["STANDARD"],
          travelerRefs: [
            {
              type: "stakeholder",
              id: "USSVAT-2021-04-14-PT-1",
              ref: "processedPnr.travelers"
            }
          ]
        }
      ],
      automatedProcesses: [
        {
          type: "automated-process",
          id: "USSVAT-2021-04-14-OT-17",
          code: "OK",
          dateTime: "2021-04-14T00:00:00",
          office: {
            id: "LON6X0100"
          },
          isApplicableToInfants: false,
          travelers: [
            {
              type: "stakeholder",
              id: "USSVAT-2021-04-14-PT-1",
              ref: "processedPnr.travelers"
            }
          ]
        }
      ]
    },
    keywords: ["passenger", "proprietary"]
  },
  {
    id: "edc:gaiax-demo:sncf:trains",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/46/Logo_SNCF_2011.svg",
    title: "Trains",
    description: "Train schedule information",
    exemple: {
      journeys: [
        {
          status: "",
          distances: {
            taxi: 0,
            car: 0,
            walking: 0,
            bike: 0,
            ridesharing: 0
          },
          links: [
            {
              href:
                "https://api.sncf.com/v1/coverage/sncf/journeys?from=admin%3Afr%3A75056&direct_path=none&last_section_mode%5B%5D=walking&is_journey_schedules=True&datetime=20210901T122030&to=admin%3Afr%3A33063&min_nb_journeys=5&min_nb_transfers=0&allowed_id%5B%5D=stop_point%3ASNCF%3A87391003%3ALongDistanceTrain&allowed_id%5B%5D=stop_point%3ASNCF%3A87581009%3ALongDistanceTrain&first_section_mode%5B%5D=walking",
              type: "journeys",
              rel: "same_journey_schedules",
              templated: false
            },
            {
              href:
                "https://api.sncf.com/v1/coverage/sncf/journeys?count=1&from=admin%3Afr%3A75056&direct_path=none&last_section_mode%5B%5D=walking&is_journey_schedules=True&datetime=20210901T122030&to=admin%3Afr%3A33063&min_nb_journeys=1&min_nb_transfers=0&allowed_id%5B%5D=stop_point%3ASNCF%3A87391003%3ALongDistanceTrain&allowed_id%5B%5D=stop_point%3ASNCF%3A87581009%3ALongDistanceTrain&first_section_mode%5B%5D=walking",
              type: "journeys",
              rel: "this_journey",
              templated: false
            }
          ],
          tags: ["walking", "ecologic"],
          nb_transfers: 0,
          durations: {
            taxi: 0,
            walking: 0,
            car: 0,
            ridesharing: 0,
            bike: 0,
            total: 8190
          },
          arrival_date_time: "20210901T143700",
          calendars: [
            {
              active_periods: [
                {
                  begin: "20210901",
                  end: "20210902"
                }
              ],
              week_pattern: {
                monday: false,
                tuesday: false,
                friday: false,
                wednesday: true,
                thursday: false,
                sunday: false,
                saturday: false
              }
            }
          ],
          departure_date_time: "20210901T122030",
          requested_date_time: "20210901T114733",
          fare: {
            found: false,
            total: {
              value: "0.0"
            },
            links: []
          },
          co2_emission: {
            value: 1690.786,
            unit: "gEC"
          },
          type: "best",
          duration: 8190,
          sections: [
            {
              from: {
                embedded_type: "administrative_region",
                quality: 0,
                administrative_region: {
                  insee: "75056",
                  name: "Paris",
                  level: 8,
                  coord: {
                    lat: "48.8566969",
                    lon: "2.3514616"
                  },
                  label: "Paris (75000-75116)",
                  id: "admin:fr:75056",
                  zip_code: "75000;75116"
                },
                name: "Paris (75000-75116)",
                id: "admin:fr:75056"
              },
              links: [],
              arrival_date_time: "20210901T122030",
              co2_emission: {
                value: 0.0,
                unit: ""
              },
              to: {
                embedded_type: "stop_point",
                stop_point: {
                  name: "Paris Montparnasse Hall 1 &2",
                  links: [],
                  coord: {
                    lat: "48.841172",
                    lon: "2.320514"
                  },
                  label: "Paris Montparnasse Hall 1 &2 (Paris)",
                  equipments: [],
                  administrative_regions: [
                    {
                      insee: "75056",
                      name: "Paris",
                      level: 8,
                      coord: {
                        lat: "48.8566969",
                        lon: "2.3514616"
                      },
                      label: "Paris (75000-75116)",
                      id: "admin:fr:75056",
                      zip_code: "75000;75116"
                    }
                  ],
                  id: "stop_point:SNCF:87391003:LongDistanceTrain",
                  stop_area: {
                    codes: [
                      {
                        type: "source",
                        value: "87391003"
                      },
                      {
                        type: "uic",
                        value: "87391003"
                      }
                    ],
                    name: "Paris Montparnasse Hall 1 &2",
                    links: [],
                    coord: {
                      lat: "48.841172",
                      lon: "2.320514"
                    },
                    label: "Paris Montparnasse Hall 1 &2 (Paris)",
                    timezone: "Europe/Paris",
                    id: "stop_area:SNCF:87391003"
                  }
                },
                quality: 0,
                name: "Paris Montparnasse Hall 1 &2 (Paris)",
                id: "stop_point:SNCF:87391003:LongDistanceTrain"
              },
              departure_date_time: "20210901T122030",
              duration: 0,
              type: "crow_fly",
              id: "XrEwfgXLCAdooreaTmL9aY_0",
              mode: "walking"
            },
            {
              from: {
                embedded_type: "stop_point",
                stop_point: {
                  name: "Paris Montparnasse Hall 1 &2",
                  links: [],
                  coord: {
                    lat: "48.841172",
                    lon: "2.320514"
                  },
                  label: "Paris Montparnasse Hall 1 &2 (Paris)",
                  equipments: [],
                  administrative_regions: [
                    {
                      insee: "75056",
                      name: "Paris",
                      level: 8,
                      coord: {
                        lat: "48.8566969",
                        lon: "2.3514616"
                      },
                      label: "Paris (75000-75116)",
                      id: "admin:fr:75056",
                      zip_code: "75000;75116"
                    }
                  ],
                  id: "stop_point:SNCF:87391003:LongDistanceTrain",
                  stop_area: {
                    codes: [
                      {
                        type: "source",
                        value: "87391003"
                      },
                      {
                        type: "uic",
                        value: "87391003"
                      }
                    ],
                    name: "Paris Montparnasse Hall 1 &2",
                    links: [],
                    coord: {
                      lat: "48.841172",
                      lon: "2.320514"
                    },
                    label: "Paris Montparnasse Hall 1 &2 (Paris)",
                    timezone: "Europe/Paris",
                    id: "stop_area:SNCF:87391003"
                  }
                },
                quality: 0,
                name: "Paris Montparnasse Hall 1 &2 (Paris)",
                id: "stop_point:SNCF:87391003:LongDistanceTrain"
              },
              links: [],
              arrival_date_time: "20210901T122100",
              co2_emission: {
                value: 0.0,
                unit: ""
              },
              to: {
                embedded_type: "stop_point",
                stop_point: {
                  name: "Paris Montparnasse Hall 1 &2",
                  links: [],
                  coord: {
                    lat: "48.841172",
                    lon: "2.320514"
                  },
                  label: "Paris Montparnasse Hall 1 &2 (Paris)",
                  equipments: [],
                  administrative_regions: [
                    {
                      insee: "75056",
                      name: "Paris",
                      level: 8,
                      coord: {
                        lat: "48.8566969",
                        lon: "2.3514616"
                      },
                      label: "Paris (75000-75116)",
                      id: "admin:fr:75056",
                      zip_code: "75000;75116"
                    }
                  ],
                  id: "stop_point:SNCF:87391003:LongDistanceTrain",
                  stop_area: {
                    codes: [
                      {
                        type: "source",
                        value: "87391003"
                      },
                      {
                        type: "uic",
                        value: "87391003"
                      }
                    ],
                    name: "Paris Montparnasse Hall 1 &2",
                    links: [],
                    coord: {
                      lat: "48.841172",
                      lon: "2.320514"
                    },
                    label: "Paris Montparnasse Hall 1 &2 (Paris)",
                    timezone: "Europe/Paris",
                    id: "stop_area:SNCF:87391003"
                  }
                },
                quality: 0,
                name: "Paris Montparnasse Hall 1 &2 (Paris)",
                id: "stop_point:SNCF:87391003:LongDistanceTrain"
              },
              departure_date_time: "20210901T122030",
              duration: 30,
              type: "boarding",
              id: "section_0_0"
            },
            {
              from: {
                embedded_type: "stop_point",
                stop_point: {
                  name: "Paris Montparnasse Hall 1 &2",
                  links: [],
                  coord: {
                    lat: "48.841172",
                    lon: "2.320514"
                  },
                  label: "Paris Montparnasse Hall 1 &2 (Paris)",
                  equipments: [],
                  administrative_regions: [
                    {
                      insee: "75056",
                      name: "Paris",
                      level: 8,
                      coord: {
                        lat: "48.8566969",
                        lon: "2.3514616"
                      },
                      label: "Paris (75000-75116)",
                      id: "admin:fr:75056",
                      zip_code: "75000;75116"
                    }
                  ],
                  id: "stop_point:SNCF:87391003:LongDistanceTrain",
                  stop_area: {
                    codes: [
                      {
                        type: "source",
                        value: "87391003"
                      },
                      {
                        type: "uic",
                        value: "87391003"
                      }
                    ],
                    name: "Paris Montparnasse Hall 1 &2",
                    links: [],
                    coord: {
                      lat: "48.841172",
                      lon: "2.320514"
                    },
                    label: "Paris Montparnasse Hall 1 &2 (Paris)",
                    timezone: "Europe/Paris",
                    id: "stop_area:SNCF:87391003"
                  }
                },
                quality: 0,
                name: "Paris Montparnasse Hall 1 &2 (Paris)",
                id: "stop_point:SNCF:87391003:LongDistanceTrain"
              },
              links: [
                {
                  type: "vehicle_journey",
                  id:
                    "vehicle_journey:SNCF:2021-09-01:7673:1187:LongDistanceTrain"
                },
                {
                  type: "line",
                  id: "line:SNCF:CSR:433500"
                },
                {
                  type: "route",
                  id: "route:SNCF:CSR:433500"
                },
                {
                  type: "commercial_mode",
                  id: "commercial_mode:TGVOUIGO"
                },
                {
                  type: "physical_mode",
                  id: "physical_mode:LongDistanceTrain"
                },
                {
                  type: "network",
                  id: "network:SNCF:TGVOUIGO"
                }
              ],
              arrival_date_time: "20210901T143700",
              additional_informations: ["regular"],
              co2_emission: {
                value: 1690.786,
                unit: "gEC"
              },
              display_informations: {
                direction: "Toulouse Matabiau (Toulouse)",
                code: "",
                network: "OUIGO",
                links: [],
                color: "",
                name: "Toulouse Matabiau - Paris Montparnasse Hall 1 &2",
                physical_mode: "Train grande vitesse",
                headsign: "7673",
                label: "Toulouse Matabiau - Paris Montparnasse Hall 1 &2",
                equipments: [],
                text_color: "",
                trip_short_name: "7673",
                commercial_mode: "OUIGO",
                description: ""
              },
              to: {
                embedded_type: "stop_point",
                stop_point: {
                  name: "Bordeaux Saint-Jean",
                  links: [],
                  coord: {
                    lat: "44.825873",
                    lon: "-0.556697"
                  },
                  label: "Bordeaux Saint-Jean (Bordeaux)",
                  equipments: [],
                  administrative_regions: [
                    {
                      insee: "33063",
                      name: "Bordeaux",
                      level: 8,
                      coord: {
                        lat: "44.841225",
                        lon: "-0.5800364"
                      },
                      label: "Bordeaux (33000)",
                      id: "admin:fr:33063",
                      zip_code: "33000"
                    }
                  ],
                  id: "stop_point:SNCF:87581009:LongDistanceTrain",
                  stop_area: {
                    codes: [
                      {
                        type: "source",
                        value: "87581009"
                      },
                      {
                        type: "uic",
                        value: "87581009"
                      }
                    ],
                    name: "Bordeaux Saint-Jean",
                    links: [],
                    coord: {
                      lat: "44.825873",
                      lon: "-0.556697"
                    },
                    label: "Bordeaux Saint-Jean (Bordeaux)",
                    timezone: "Europe/Paris",
                    id: "stop_area:SNCF:87581009"
                  }
                },
                quality: 0,
                name: "Bordeaux Saint-Jean (Bordeaux)",
                id: "stop_point:SNCF:87581009:LongDistanceTrain"
              },
              base_arrival_date_time: "20210901T143700",
              base_departure_date_time: "20210901T122100",
              departure_date_time: "20210901T122100",
              geojson: {
                type: "LineString",
                properties: [
                  {
                    length: 497290
                  }
                ],
                coordinates: [
                  [2.320514, 48.841172],
                  [-0.556697, 44.825873]
                ]
              },
              duration: 8160,
              type: "public_transport",
              id: "section_1_0",
              data_freshness: "base_schedule",
              stop_date_times: [
                {
                  stop_point: {
                    name: "Paris Montparnasse Hall 1 &2",
                    links: [],
                    coord: {
                      lat: "48.841172",
                      lon: "2.320514"
                    },
                    label: "Paris Montparnasse Hall 1 &2 (Paris)",
                    equipments: [],
                    id: "stop_point:SNCF:87391003:LongDistanceTrain"
                  },
                  links: [],
                  arrival_date_time: "20210901T122100",
                  additional_informations: [],
                  departure_date_time: "20210901T122100",
                  base_arrival_date_time: "20210901T122100",
                  base_departure_date_time: "20210901T122100"
                },
                {
                  stop_point: {
                    name: "Bordeaux Saint-Jean",
                    links: [],
                    coord: {
                      lat: "44.825873",
                      lon: "-0.556697"
                    },
                    label: "Bordeaux Saint-Jean (Bordeaux)",
                    equipments: [],
                    id: "stop_point:SNCF:87581009:LongDistanceTrain"
                  },
                  links: [],
                  arrival_date_time: "20210901T143700",
                  additional_informations: [],
                  departure_date_time: "20210901T144300",
                  base_arrival_date_time: "20210901T143700",
                  base_departure_date_time: "20210901T144300"
                }
              ]
            },
            {
              from: {
                embedded_type: "stop_point",
                stop_point: {
                  name: "Bordeaux Saint-Jean",
                  links: [],
                  coord: {
                    lat: "44.825873",
                    lon: "-0.556697"
                  },
                  label: "Bordeaux Saint-Jean (Bordeaux)",
                  equipments: [],
                  administrative_regions: [
                    {
                      insee: "33063",
                      name: "Bordeaux",
                      level: 8,
                      coord: {
                        lat: "44.841225",
                        lon: "-0.5800364"
                      },
                      label: "Bordeaux (33000)",
                      id: "admin:fr:33063",
                      zip_code: "33000"
                    }
                  ],
                  id: "stop_point:SNCF:87581009:LongDistanceTrain",
                  stop_area: {
                    codes: [
                      {
                        type: "source",
                        value: "87581009"
                      },
                      {
                        type: "uic",
                        value: "87581009"
                      }
                    ],
                    name: "Bordeaux Saint-Jean",
                    links: [],
                    coord: {
                      lat: "44.825873",
                      lon: "-0.556697"
                    },
                    label: "Bordeaux Saint-Jean (Bordeaux)",
                    timezone: "Europe/Paris",
                    id: "stop_area:SNCF:87581009"
                  }
                },
                quality: 0,
                name: "Bordeaux Saint-Jean (Bordeaux)",
                id: "stop_point:SNCF:87581009:LongDistanceTrain"
              },
              links: [],
              arrival_date_time: "20210901T143700",
              co2_emission: {
                value: 0.0,
                unit: ""
              },
              to: {
                embedded_type: "administrative_region",
                quality: 0,
                administrative_region: {
                  insee: "33063",
                  name: "Bordeaux",
                  level: 8,
                  coord: {
                    lat: "44.841225",
                    lon: "-0.5800364"
                  },
                  label: "Bordeaux (33000)",
                  id: "admin:fr:33063",
                  zip_code: "33000"
                },
                name: "Bordeaux (33000)",
                id: "admin:fr:33063"
              },
              departure_date_time: "20210901T143700",
              duration: 0,
              type: "crow_fly",
              id: "UmP9HDHd6vFdAXrH9pHLkj_0",
              mode: "walking"
            }
          ]
        }
      ],
      disruptions: [],
      notes: [],
      feed_publishers: [
        {
          url: "",
          id: "sncf",
          license: "Private (unspecified)",
          name: "SNCF PIV Production"
        },
        {
          url: "",
          id: "SNCF:sncf-piv",
          license: "Private (unspecified)",
          name: "SNCF PIV Production"
        }
      ],
      context: {
        timezone: "Europe/Paris",
        current_datetime: "20210901T114734",
        car_direct_path: {
          co2_emission: {
            value: 123978.2845071452,
            unit: "gEC"
          }
        }
      },
      exceptions: []
    },
    keywords: ["train", "schedule", "open"]
  },
  {
    id: "edc:gaiax-demo:afkl:flights",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/0e/Air_France-KLM_Logo.svg",
    title: "Flights",
    description: "Schedule flight data",
    exemple: {
      flightNumber: 7711,
      flightScheduleDate: "2021-09-23",
      id: "20210923+AF+7711",
      route: ["NCE", "CDG"],
      airline: {
        code: "AF",
        name: "AIR FRANCE"
      },
      codeShareRelations: [
        {
          marketingFlightNumber: 6161,
          code: "F",
          type: "PASSENGER",
          airline: {
            code: "AM",
            name: "AEROMEXICO AEROVIAS DE MEXICO S.A. DE C.V."
          }
        },
        {
          marketingFlightNumber: 6302,
          code: "F",
          type: "PASSENGER",
          airline: {
            code: "AY",
            name: "FINNAIR OYJ"
          }
        },
        {
          marketingFlightNumber: 5606,
          code: "F",
          type: "PASSENGER",
          airline: {
            code: "BT",
            name: "AIR BALTIC CORPORATION AS"
          }
        },
        {
          marketingFlightNumber: 7118,
          code: "F",
          type: "PASSENGER",
          airline: {
            code: "CZ",
            name: "CHINA SOUTHERN AIRLINES"
          }
        },
        {
          marketingFlightNumber: 8610,
          code: "F",
          type: "PASSENGER",
          airline: {
            code: "DL",
            name: "DELTA AIR LINES INC."
          }
        },
        {
          marketingFlightNumber: 5948,
          code: "F",
          type: "PASSENGER",
          airline: {
            code: "EY",
            name: "ETIHAD AIRWAYS"
          }
        },
        {
          marketingFlightNumber: 1030,
          code: "F",
          type: "PASSENGER",
          airline: {
            code: "FB",
            name: "BULGARIA AIR"
          }
        },
        {
          marketingFlightNumber: 7782,
          code: "F",
          type: "PASSENGER",
          airline: {
            code: "JU",
            name: "AIR SERBIA BELGRADE"
          }
        },
        {
          marketingFlightNumber: 3011,
          code: "F",
          type: "PASSENGER",
          airline: {
            code: "KQ",
            name: "KENYA AIRWAYS"
          }
        },
        {
          marketingFlightNumber: 9081,
          code: "F",
          type: "PASSENGER",
          airline: {
            code: "MK",
            name: "AIR MAURITIUS LTD"
          }
        },
        {
          marketingFlightNumber: 1516,
          code: "F",
          type: "PASSENGER",
          airline: {
            code: "MU",
            name: "CHINA EASTERN AIRLINES"
          }
        },
        {
          marketingFlightNumber: 9556,
          code: "F",
          type: "PASSENGER",
          airline: {
            code: "RO",
            name: "TAROM"
          }
        },
        {
          marketingFlightNumber: 6099,
          code: "F",
          type: "PASSENGER",
          airline: {
            code: "SV",
            name: "SAUDI ARABIAN AIRLINES"
          }
        },
        {
          marketingFlightNumber: 3651,
          code: "F",
          type: "PASSENGER",
          airline: {
            code: "VN",
            name: "VIETNAM AIRLINES JSC"
          }
        },
        {
          marketingFlightNumber: 6298,
          code: "F",
          type: "PASSENGER",
          airline: {
            code: "VS",
            name: "VIRGIN ATLANTIC AIRWAYS LIMITED"
          }
        }
      ],
      flightStatusPublic: "SCHEDULED",
      flightStatusPublicLangTransl: "Scheduled",
      flightLegs: [
        {
          status: "S",
          statusName: "Scheduled",
          publishedStatus: "ONTIME",
          departureInformation: {
            airport: {
              code: "NCE",
              name: "COTE D AZUR AIRPORT",
              nameLangTranl: "Cote D'Azur Airport",
              city: {
                code: "NCE",
                name: "NICE",
                nameLangTranl: "Nice",
                country: {
                  areaCode: "E",
                  code: "FR",
                  name: "FRANCE",
                  nameLangTranl: "France",
                  euroCountry: "Y",
                  euCountry: "Y"
                }
              },
              location: {
                latitude: 43.6639,
                longitude: 7.2175
              },
              places: {
                terminalCode: "2"
              }
            },
            times: {
              scheduled: "2021-09-23T07:15:00.000+02:00",
              latestPublished: "2021-09-23T07:15:00.000+02:00"
            }
          },
          arrivalInformation: {
            airport: {
              code: "CDG",
              name: "CHARLES DE GAULLE AIRPORT",
              nameLangTranl: "Charles De Gaulle Airport",
              city: {
                code: "PAR",
                name: "PARIS",
                nameLangTranl: "Paris",
                country: {
                  areaCode: "E",
                  code: "FR",
                  name: "FRANCE",
                  nameLangTranl: "France",
                  euroCountry: "Y",
                  euCountry: "Y"
                }
              },
              location: {
                latitude: 49.0097,
                longitude: 2.5486
              },
              places: {
                arrivalPositionTerminal: "2F"
              }
            },
            times: {
              scheduled: "2021-09-23T08:50:00.000+02:00",
              latestPublished: "2021-09-23T08:50:00.000+02:00",
              estimated: {
                value: "2021-09-23T08:50:00.000+02:00"
              }
            }
          },
          legStatusPublic: "SCHEDULED",
          legStatusPublicLangTransl: "Scheduled",
          passengerCustomsStatus: "SCHENGEN",
          serviceType: "J",
          serviceTypeName: "Normal Service",
          restricted: false,
          scheduledFlightDuration: "PT1H35M",
          completionPercentage: "0",
          timeZoneDifference: "+0000",
          aircraft: {
            typeCode: "318",
            typeName: "AIRBUS A318",
            ownerAirlineCode: "AF",
            ownerAirlineName: "AIR FRANCE",
            physicalPaxConfiguration: "Y131",
            physicalFreightConfiguration: "PP000LL000",
            operationalConfiguration: "C010Y116",
            cockpitCrewEmployer: "AF",
            cabinCrewEmployer: "AF"
          },
          irregularity: {
            cancelled: "N"
          },
          internalLegStatusArrFocus: false
        }
      ],
      internalStatusArrFocus: false
    },
    keywords: ["schedule", "flight", "open"]
  }
];
export default data;
