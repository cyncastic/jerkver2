require 'test_helper'

class StaticControllerTest < ActionController::TestCase
  test "should get home" do
    get :home
    assert_response :success
  end

  test "should get artwork" do
    get :artwork
    assert_response :success
  end

  test "should get instagram" do
    get :instagram
    assert_response :success
  end

  test "should get photos" do
    get :photos
    assert_response :success
  end

  test "should get abstract" do
    get :abstract
    assert_response :success
  end

  test "should get contact" do
    get :contact
    assert_response :success
  end

end
