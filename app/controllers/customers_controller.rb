class CustomersController < ApplicationController

def create
    customer = Customer.create(customer_params)
    if customer.valid?
        session[:customer_id] = customer.id
        render json: customer
    else
        render json: {errors: customer.errors.full_messages}, status: :unprocessable_entity
    end
end


def show
    customer = Customer.find_by(id: session[:customer_id])
    if customer
      render json: customer
    else
      render json: {error: "Not Authorized"}, status: :unauthorized
    end
  end

def index 
    customers = Customer.all
    render json: customers
end
private

def customer_params
    params.permit(:username, :password, :name)
    end
end
