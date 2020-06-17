class SuperheroesController < ApplicationController
    def index
        render json: Superhero.all
    end

    def show
        superhero = Superhero.find_by(id: params[:id])
        
        render json: superhero
    end

    def create
        superhero = Superhero.new(superhero_params)

        if superhero.save
            render json: superhero
        else
            render json: superhero.errors.full_message, status: :unprocessable_entity
        end
    end
    
    def update
        superhero = Superhero.find_by(id: params[:id])
        
        if superhero.update(superhero_params)
            render json: superhero
        else
            render json: superhero.errors.full_message, status: :unprocessable_entity
        end
    end

    def destroy
        superhero = Superhero.find_by(id: params[:id])

        if superhero.destroy
            render json: superhero
        else
            render json: "Can't destroy this superhero, too imporant!"
        end
    end

    def superhero_params
        params.require(:superhero).permit(:name, :secret_identity, :power)
    end
end