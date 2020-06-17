class SillyController < ApplicationController
    def working_hard
        render json: params
    end

    def compensation
        render json: params
    end
    def fired
        render json: params
    end
end

# Params contains 
# 1. Query String
# 2. Request Body
# 3. URL params/routes (wildcards)