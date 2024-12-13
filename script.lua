addEvent('authenticateUser', true)
addEventHandler('authenticateUser', resourceRoot, function(username, password)
    -- Example of authentication logic
    if username == 'user' and password == 'password' then
        -- Authenticate user
        outputChatBox('User '..username..' authenticated successfully!', source)
    else
        -- Inform user about invalid credentials
        outputChatBox('Invalid username or password!', source)
    end
end)
