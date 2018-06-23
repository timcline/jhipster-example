#!/bin/bash

# Build the gateway server
(cd ../enotary-gateway && ./gradlew bootWar -Pprod buildDocker)

# Build the UAA server
(cd ../enotary-uaa && ./gradlew bootWar -Pprod buildDocker)
