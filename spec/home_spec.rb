describe 'Check the name' do
  it 'validate the name of site' do
    visit 'https://brunopulis.com'
    binding.pry

    expect(find('.site-title').text).to eql 'Bruno Pulis'
  end 
end