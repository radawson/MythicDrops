import kotlin.String
import org.gradle.plugin.use.PluginDependenciesSpec
import org.gradle.plugin.use.PluginDependencySpec

/**
 * Generated by https://github.com/jmfayard/buildSrcVersions
 *
 * Find which updates are available by running
 *     `$ ./gradlew buildSrcVersions`
 * This will only update the comments.
 *
 * YOU are responsible for updating manually the dependency version.
 */
object Versions {
    const val io_pixeloutlaw_spigot_commons: String = "1.15.2.0"

    const val org_jetbrains_kotlin: String = "1.3.70"

    const val se_bjurr_gitchangelog_git_changelog_gradle_plugin_gradle_plugin: String = "1.64"

    const val io_pixeloutlaw_gradle_buildconfigkt_gradle_plugin: String = "1.0.5"

    const val com_github_johnrengelman_shadow_gradle_plugin: String = "5.2.0"

    const val com_diffplug_gradle_spotless_gradle_plugin: String = "3.27.1"

    const val io_gitlab_arturbosch_detekt_gradle_plugin: String = "1.6.0"

    const val de_fayard_buildsrcversions_gradle_plugin: String = "0.7.0"

    const val org_jetbrains_kotlin_jvm_gradle_plugin: String = "1.3.70"

    const val nebula_nebula_bintray_gradle_plugin: String = "8.3.0"

    const val nebula_maven_publish_gradle_plugin: String = "17.2.0"

    const val org_jetbrains_dokka_gradle_plugin: String = "0.10.1"

    const val com_moowork_node_gradle_plugin: String = "1.3.1"

    const val nebula_project_gradle_plugin: String = "7.0.7"

    const val nebula_release_gradle_plugin: String = "14.1.0"

    const val junit_platform_launcher: String = "none"// No version. See buildSrcVersions#23

    const val plugin_yml_annotations: String = "1.1.0"

    const val moshi_kotlin_codegen: String = "1.9.2"

    const val plugin_yml_processor: String = "1.1.0"

    const val config_migrator: String = "1.7.0"

    const val bstats_bukkit: String = "1.7"

    const val junit_jupiter: String = "5.6.0"

    const val assertj_core: String = "3.15.0"

    const val commons_text: String = "1.8"

    const val mockito_core: String = "3.3.1"

    const val adapter_lib: String = "2.1.0"

    const val spigot_api: String = "1.15.2-R0.1-SNAPSHOT"

    const val acf_paper: String = "0.5.0-SNAPSHOT"

    const val junit_bom: String = "5.6.0"

    const val mockk: String = "1.9.3"

    /**
     * Current version: "6.2"
     * See issue 19: How to update Gradle itself?
     * https://github.com/jmfayard/buildSrcVersions/issues/19
     */
    const val gradleLatestVersion: String = "6.2.1"
}

/**
 * See issue #47: how to update buildSrcVersions itself
 * https://github.com/jmfayard/buildSrcVersions/issues/47
 */
val PluginDependenciesSpec.buildSrcVersions: PluginDependencySpec
    inline get() =
            id("de.fayard.buildSrcVersions").version(Versions.de_fayard_buildsrcversions_gradle_plugin)
