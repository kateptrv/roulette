const feedback_demographics = {
    type: jsPsychSurveyHtmlForm,
    html: `
      <div style="max-width:700px; margin:auto; text-align:left;">
        <p style="text-align:center;">Please provide the following information to complete the study:</p>
  
        <!-- Feedback Section -->
        <div style="margin-bottom:2em;">
          <label for="feedback"><strong>Feedback:</strong></label><br>
          <textarea name="feedback" id="feedback" rows="4" 
                    style="width:100%;"
                    placeholder="Please provide any feedback you have about the experiment."></textarea>
        </div>

      <!-- Gambling History Section -->
      <div style="margin-bottom:2em;">
        <div style="margin-bottom:0.75em;"><strong>Gambling history</strong></div>

        <div style="margin-bottom:1.25em;">
          <div style="margin-bottom:0.5em;">
            In the past <strong>12 months</strong>, how often have you gambled for money (including online betting, casinos, sports betting, lottery, etc.)?
          </div>
          <label style="display:block; margin:0.25em 0;">
            <input type="radio" name="gamble_freq_12mo" value="Never"> Never
          </label>
          <label style="display:block; margin:0.25em 0;">
            <input type="radio" name="gamble_freq_12mo" value="A few times"> A few times
          </label>
          <label style="display:block; margin:0.25em 0;">
            <input type="radio" name="gamble_freq_12mo" value="About once a month"> About once a month
          </label>
          <label style="display:block; margin:0.25em 0;">
            <input type="radio" name="gamble_freq_12mo" value="About once a week"> About once a week
          </label>
          <label style="display:block; margin:0.25em 0;">
            <input type="radio" name="gamble_freq_12mo" value="Daily or almost daily"> Daily or almost daily
          </label>
        </div>

        <!-- Hot-number reliance -->
        <div style="margin-bottom:2em;">
          <div style="margin-bottom:0.5em;">
            <strong>Decision strategy</strong>
          </div>

          <div style="margin-bottom:0.5em;">
            When making your choices in the game, how much did you rely on the “hot numbers” information?
          </div>

          <label style="display:block; margin:0.25em 0;">
            <input type="radio" name="hot_reliance" value="Not at all">
            Not at all
          </label>

          <label style="display:block; margin:0.25em 0;">
            <input type="radio" name="hot_reliance" value="Sometimes">
            Sometimes
          </label>

          <label style="display:block; margin:0.25em 0;">
            <input type="radio" name="hot_reliance" value="All the time">
            All the time
          </label>
        </div>


        <!-- Demographics Section -->
        <div style="
          display: grid; 
          grid-template-columns: 150px auto; 
          row-gap: 1.5em; 
          column-gap: 1em;
        ">
          <!-- Age -->
          <div style="align-self:center;"><strong>Age:</strong></div>
          <div>
            <input name="age" type="number" min="18" max="100" 
                   style="width:100%; max-width:100px;" />
          </div>
  
          <!-- Gender -->
          <div style="align-self:center;"><strong>Gender:</strong></div>
          <div>
            <label><input name="gender" type="radio" value="Female"> Female</label>
            <label><input name="gender" type="radio" value="Male"> Male</label>
            <label><input name="gender" type="radio" value="Non-binary"> Non-binary</label><br>
            <label>Other: <input type="text" name="other_gender" style="width:50%;" /></label>
          </div>
  
          <!-- Race -->
          <div style="align-self:center;"><strong>Race:</strong></div>
          <div>
            <label><input name="race" type="radio" value="White"> White</label><br>
            <label><input name="race" type="radio" value="Black/African American"> 
                   Black/African American
            </label><br>
            <label><input name="race" type="radio" value="American Indian/Alaska Native"> 
                   American Indian/Alaska Native
            </label><br>
            <label><input name="race" type="radio" value="Asian"> Asian</label><br>
            <label><input name="race" type="radio" value="Native Hawaiian/Pacific Islander"> 
                   Native Hawaiian/Pacific Islander
            </label><br>
            <label><input name="race" type="radio" value="Multiracial/Mixed"> 
                   Multiracial/Mixed
            </label><br>
            <label>Other: <input type="text" name="other_race" style="width:50%;" /></label>
          </div>
  
          <!-- Ethnicity -->
          <div style="align-self:center;"><strong>Ethnicity:</strong></div>
          <div>
            <label><input name="ethnicity" type="radio" value="Hispanic"> Hispanic</label>
            <label><input name="ethnicity" type="radio" value="Non-Hispanic"> Non-Hispanic</label>
          </div>
        </div><!-- end demographic grid -->
  
        <p style="text-align:center;">Please press the finish button to complete the experiment.</p>
      </div>`, // end html
  
    button_label: 'Finish',
  
    on_finish: function (data) {
      let response = {};
      response.feedback = data.response.feedback;
      response.age = parseInt(data.response.age);
      response.gamble_freq_12mo = data.response.gamble_freq_12mo;
      response.hot_reliance = data.response.hot_reliance;
  
      // Race
      response.race =
        data.response.race === 'other_race' || 
        typeof data.response.race === 'undefined'
          ? data.response.other_race
          : data.response.race;
  
      // Gender
      response.gender = data.response.gender;
  
      // Ethnicity
      response.ethnicity = typeof data.response.ethnicity === 'undefined'
        ? ''
        : data.response.ethnicity;
  
      data.response = response;
    }
  };