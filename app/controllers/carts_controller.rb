class CartsController < ApplicationController
  before_action :set_cart, only: [:update, :destroy]

    def index
        carts = current_user.carts.order(:id)
        render json: carts

      end

      def create
        cart = current_user.carts.create(params.permit(:menu_id, :quantity))
          render json: cart, status: :created
      end

      def destroy
        authorized_user
        @cart.destroy
        head :no_content
      end

      def update

        authorized_user
        if @cart.update(quantity: params[:quantity])
          render json: @cart
        else
          render json: @cart.errors, status: :unprocessable_entity
        end
      end 

      private

    def set_cart
        @cart = Cart.find(params[:id])
    end

    def current_user
      current_user = Customer.find_by(id: session[:customer_id])
    end

    def authorized_user
      authorized_user = render json: { error: "Not authorized" }, status: :unauthorized unless @cart.customer_id == current_user.id
    end

    
end
