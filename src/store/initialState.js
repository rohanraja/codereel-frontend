export default {
  activeFrame: {
    fileRunIdx: 0,
    lineSeqIdx: 0,
    maxFileRuns: 3,
    maxLineSeqs: [3,5,2]
  },

  codeFiles: {
    "main.thor" : {
      code: `require_relative 'hook_helper' \nrequire_relative 'story' \nrequire_relative 'component_base' \nrequire_relative 'path_helpers' \nrequire_relative 'action_creator' \nrequire_relative 'component_gen' \nrequire_relative 'template_helpers' \nrequire_relative 'create_reducer' \nrequire 'tempfile' \n \nclass React < Thor \n  include Thor::Actions \n  include TemplateHelpers \n  include ComponentBase \n  include ComponentGen \n  include PathHelpers \n  include Story \n  include ActionCreator \n  include CreateReducer \n \n  source_root File.expand_path('templates', __dir__) \n \n  desc "Create React-Redux Component", "Define connected react component along with placeholders for actions, reducers and types" \n  def component(componentName) \n    component_main(componentName) \n  end \n \n  desc "Add Action Creator", "Generates an action creator method, imports that in component and connects it to react" \n  def actionCreator(componentName, actionCreatorName) \n    say "Creating #{actionCreatorName} method for #{componentName} component", :green \n    actionCreator_main(componentName, actionCreatorName) \n  end \n \n  desc "addStory", "Adds the component to the storybook for manual UI test" \n  def addStory(componentName) \n    say "Creating Without Props story for #{componentName} component", :green \n    addStory_main(componentName) \n  end \n \n  desc "createReducer ComponentName stateVarName", "Creates a reducer inside the component and for the state variable" \n  def reducer(componentName, reducerName) \n    say "Creating Reducer #{reducerName}", :green \n    createReducer_main(componentName, reducerName) \n  end \n \nprivate \n \nend`,
    },

    "action_creator.rb" : {
      code: `module ActionCreator \n \n  def actionCreator_main(componentName, actionCreatorName) \n \n    compInitialize(componentName) \n    generate_action_creator(componentName, actionCreatorName) \n    add_action_import_statement(componentName, actionCreatorName) \n \n  end \n \n  def generate_action_creator(componentName, actionCreatorName) \n \n    @actionCreatorName = actionCreatorName \n    actionCreatorTemplate = "action_creator/methodTemplate.js" \n    methodTempFile = getParsedTemplateFile(actionCreatorTemplate) \n \n    hooksHelper = HooksHelper.new \n    hooksHelper.addFileAfterHook(comp_filepath(@actions_file) , "new_actionCreator", methodTempFile) \n  end \n \n  def add_action_import_statement(componentName, actionCreatorName) \n    imp = gen_import_statement(actionCreatorName, @actions_file, 0) \n    hooksHelper = HooksHelper.new \n    hooksHelper.addLineAfterHook(comp_filepath(@index_file), "import", imp) \n  end \n \nend`,
    },
  },

  fileRuns: [
    {
      fileName: "main.thor",
      lineSequence: [28,29,30]
    },
    {
      fileName: "action_creator.rb",
      lineSequence: [2,4,5,6,8]
    },
    {
      fileName: "main.thor",
      lineSequence: [30, 31]
    },
  ],
}
